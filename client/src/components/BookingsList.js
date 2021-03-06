import Booking from './Booking';

const BookingsList = ({bookings, removeBooking, updateBookingDetails}) => {

    const bookingNodes = bookings.map((booking) => {
        return (<Booking key={booking._id} id={booking['_id']} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} removeBooking={removeBooking} updateBookingDetails={updateBookingDetails} />)
    });

    return (
        <div id="bookings-list">
            <h3>Current Bookings</h3>
            <ol>
                {bookingNodes}
            </ol>
        </div>
    );
}

export default BookingsList;