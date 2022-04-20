
const Booking = ({id, name, email, checkedIn, removeBooking, updateBookingDetails}) => {

    const handleDeleteClick = () =>{
        removeBooking(id);
    };

    const handleCheckIn = () => {
        updateBookingDetails({
            _id: id,
            name,
            email,
            checkedIn: !checkedIn
        })
    }

    return(
        <li>
            <div id="booking-details">
                <div id="guest-details">
                    <p><strong>Lead Guest Name: </strong>{name}</p>
                    <p><strong>Email: </strong>{email}</p>
                </div>
                <div id="buttons">
                    {checkedIn ? <button onClick={handleCheckIn} id="check-out">Check Out</button> : <button onClick={handleCheckIn} id="check-in">Check In</button>}
                    <button onClick={handleDeleteClick} id="delete">Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Booking;