
const Booking = ({id, name, email, checkedIn, removeBooking}) => {

    const handleClick = () =>{
        removeBooking(id);
    };

    return(
        <li>
            {name}
            {email}
            {checkedIn}
            <button onClick={handleClick}>Delete</button>
        </li>
    );
}

export default Booking;