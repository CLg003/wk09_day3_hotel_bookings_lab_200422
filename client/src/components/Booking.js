
const Booking = ({name, email, checkedIn}) => {
    return(
        <li>
            {name}
            {email}
            {checkedIn}
        </li>
    );
}

export default Booking;