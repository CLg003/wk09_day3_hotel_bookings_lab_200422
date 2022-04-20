import Booking from './Booking';

const BookingsList = ({bookings, removeBooking}) => {

    const bookingNodes = bookings.map((booking) => {
        return (<Booking key={booking._id} id={booking['_id']} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} removeBooking={removeBooking} />)
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