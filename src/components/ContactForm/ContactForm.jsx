// import { Component } from "react";
import { useState } from "react";
// import { nanoid } from "nanoid";
import {addContact} from '../../redux/contactOperations';
import { useSelector, useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const resetForm = () => {
        setName("");
        setNumber("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: name,
            number: number,
        };
        if (contacts
      .map((contact) => contact.name)
      .includes(newContact.name)) {
      alert(
        `${newContact.name} is already in contacts.`
      );
      return;
        }
        dispatch(addContact(newContact));
        // stateChange(newContact);
        resetForm();
    };

    return  <form onSubmit={handleSubmit}>
        <label>
            Name
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
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
            onChange={handleChange}
            value={number}
            />
        </label>
        <button type="submit">
            Add contact
        </button>
    </form>
}

export default ContactForm;


//---------------
 // const stateChange = (newContact) => {
  //   const searchName = contacts
  //     .map((contact) => contact.name)
  //     .includes(newContact.name);

  //   if (searchName) {
  //     alert(
  //       `${newContact.name} is already in contacts.`
  //     );
  //     return;
  //   }

  //   setContacts([...contacts, newContact]);
  // };