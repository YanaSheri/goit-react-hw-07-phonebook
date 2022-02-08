import { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
        console.log(name);
        console.log(value);
    };

    resetForm = () => {
        this.setState({
            ...this.state,
            number: '',
            name: '',
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: this.state.name,
            id: nanoid(),
            number: this.state.number,
        };
        this.props.stateChange(newContact);
        this.resetForm();
    };

    render() {
        const {name, number} = this.state;
        return  <form onSubmit={this.handleSubmit}>
            <label>
                Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={name}
                />
            </label>
            <label>
                Number
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={number}
                />
            </label>
            <button type="submit">
                Add contact
            </button>
        </form>
    }
}

export default ContactForm;