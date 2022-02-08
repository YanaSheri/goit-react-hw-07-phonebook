import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
    filter: "",
  };

  handleFilter = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      filter: value,
    });
  };

  stateChange = (newContact) => {
    const searchName = this.state.contacts
      .map((contact) => contact.name)
      .includes(newContact.name);

    if (searchName) {
      alert(
        `${newContact.name} is already in contacts.`
      );
      return;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        newContact,
      ],
    }));
  };

  deleteListItem = (id) =>
    this.setState((prev) => ({
      contacts: prev.contacts.filter(
        (el) => el.id !== id
      ),
    }));

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newContact = {
  //     name: this.state.name,
  //     id: nanoid(),
  //     number: this.state.number,
  //   };
  //   this.setState((prevState) => {
  //     const { contacts } = prevState;
  //     const newContacts = [
  //       ...contacts,
  //       newContact,
  //     ];
  //     return {
  //       contacts: newContacts,
  //       name: "",
  //       number: "",
  //       filter: "",
  //     };
  //   });
  // };

  render() {
    //const contacts = this.state.contacts;
    //const name = this.state.name;
    //то же самое
    const { contacts, filter } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          stateChange={this.stateChange}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilter={this.handleFilter}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteListItem={this.deleteListItem}
        />
      </>
    );
  }
}

export default App;