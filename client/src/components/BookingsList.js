import Booking from './Booking';

const BookingsList = ({bookings}) => {

    const bookingNodes = bookings.map((booking, index) => {
        return (<Booking key={index} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} />)
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