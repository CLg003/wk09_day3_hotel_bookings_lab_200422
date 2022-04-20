
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
            {name}
            {email}
            <p>{checkedIn ? <button onClick={handleCheckIn}>CheckOut</button> : <button onClick={handleCheckIn}>CheckIn</button>}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
}

export default Booking;