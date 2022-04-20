import './App.css';
import Form from './containers/Form';
import BookingsList from './components/BookingsList'
import {useState} from 'react';

function App() {
  const [bookings, setBookings] = useState([
    {name: "Julie",
    email: "julie@email.com",
    checkedIn: false}
  ]);


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
