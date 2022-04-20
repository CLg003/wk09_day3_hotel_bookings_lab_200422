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
            email
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Customer Name:</label>
                <input type="text" value={name} onChange={handleNameInput} require></input>
                <label>Customer Email:</label>
                <input type="email" value={email} onChange={handleEmailInput} require></input>
                <input type="submit">Save</input>
            </form>
        </div>

    );
};

export default Form;