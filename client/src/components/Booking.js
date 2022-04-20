
const Booking = ({id, name, email, checkedIn, removeBooking, updateCheckInStatus}) => {

    const handleDeleteClick = () =>{
        removeBooking(id);
    };

    const handleCheckIn = () => {
        updateCheckInStatus(id);
    }

    return(
        <li>
            {name}
            {email}
            <p>{checkedIn ? <span>Checked In</span> : <button onClick={handleCheckIn}>CheckIn</button>}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
}

export default Booking;