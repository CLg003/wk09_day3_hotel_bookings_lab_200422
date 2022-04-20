import './App.css';
import Form from './containers/Form';
import BookingsList from './components/BookingsList'
import Header from './components/Header';
import {useState, useEffect} from 'react';
import {getBookings, putBooking} from './BookingService';
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
      deleteBooking(id)
      .then(() => {
        const index = bookings.findIndex(booking => booking["_id"] === id);
        const copyBookings = [...bookings];
        copyBookings.splice(index, 1);
        setBookings(copyBookings);
      });
  };

  const updateBookingDetails = (bookingToUpdate) => {

    putBooking(bookingToUpdate)
    .then(() => {
      const index = bookings.findIndex(booking => booking["_id"] === bookingToUpdate._id);
      const copyBookings = [...bookings];
      copyBookings[index].checkedIn = bookingToUpdate.checkedIn;
      setBookings(copyBookings);
    })
  }

  return (
    <div id="app">
      <Header />
      <Form addBooking={addBooking}/>
      <BookingsList bookings={bookings} removeBooking={removeBooking} updateBookingDetails={updateBookingDetails}/>
    </div>
  );
}

export default App;
