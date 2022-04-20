import Booking from './Booking';

const BookingsList = ({bookings, removeBooking, updateCheckInStatus}) => {

    const bookingNodes = bookings.map((booking) => {
        return (<Booking key={booking._id} id={booking['_id']} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} removeBooking={removeBooking} updateCheckInStatus={updateCheckInStatus} />)
    });

    return (
        <div>
            <ol>
                {bookingNodes}
            </ol>
        </div>
    );
}

export default BookingsList;