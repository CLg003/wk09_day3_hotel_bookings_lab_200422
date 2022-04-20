import {useState} from 'react';

const Form = ({addBooking}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameInput = (event) => {
        setName(event.target.value);
    };

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        addBooking({
            name, 
            email,
            checkedIn: false
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div id="form-inputs">
                    <div id="form-name">
                        <label>Customer Name:</label>
                        <input type="text" className="text-box" value={name} onChange={handleNameInput} required></input>
                    </div>
                    <div id="form-email">
                        <label>Customer Email:</label>
                        <input type="email" className="text-box" value={email} onChange={handleEmailInput} required></input>
                    </div>
                </div>
                <input type="submit" id="submit" value="Save Booking"/>
            </form>
        </div>

    );
};

export default Form;