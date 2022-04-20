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
                <input type="text" value={name} onChange={handleNameInput} required></input>
                <label>Customer Email:</label>
                <input type="email" value={email} onChange={handleEmailInput} required></input>
                <input type="submit" value="Save"/>
            </form>
        </div>

    );
};

export default Form;