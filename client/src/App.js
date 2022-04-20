import './App.css';
import Form from './containers/Form';
import BookingsList from './components/BookingsList'
import {useState, useEffect} from 'react';
import {getBookings} from './BookingService';
import {postBooking} from './BookingService';
import {deleteBooking} from './BookingService';

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings()
    .then((data) => {
      setBookings(data)
    })
  }, [])


  const addBooking = (newBooking) => {
      postBooking(newBooking)
      .then((newBooking) => {
        const copyBookings = [...bookings]
        copyBookings.push(newBooking)
        setBookings(copyBookings)
      });
  };

  const removeBooking = (id) => {
      deleteBooking(id).then(() => {
        const index = bookings.findIndex(booking => booking["_id"] === id);
        const copyBookings = [...bookings];
        copyBookings.splice(index, 1);
        setBookings(copyBookings);
      });
  };

  return (
    <div>
      <Form addBooking={addBooking}/>
      <BookingsList bookings={bookings} removeBooking={removeBooking}/>
    </div>
  );
}

export default App;
