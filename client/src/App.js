import './App.css';
import Form from './containers/Form';
import BookingsList from './components/BookingsList'
import {useState, useEffect} from 'react';
import {getBookings} from './BookingService';

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings()
    .then((data) => {
      setBookings(data)
    })
  }, [])


  const addBooking = (newBooking) => {
    newBooking["checkedIn"] = false;
    const copyBookings = [...bookings]
    copyBookings.push(newBooking);
    setBookings(copyBookings);
  };

  return (
    <div>
      <Form addBooking={addBooking}/>
      <BookingsList bookings={bookings}/>
    </div>
  );
}

export default App;
