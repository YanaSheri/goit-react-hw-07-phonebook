import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";

const App = () => {

  const contactsArr = [
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
    ]

  const didMount = () => {
    const keyContact =
      localStorage.getItem("key");
    const contactParse = JSON.parse(keyContact);
    return contactParse
      ? contactParse
      : contactsArr;
  };
  
  const [contacts, setContacts] =
    useState(didMount);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "key",
      JSON.stringify(contacts)
    );
  });

  const handleFilter = (e) => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  const stateChange = (newContact) => {
    const searchName = contacts
      .map((contact) => contact.name)
      .includes(newContact.name);

    if (searchName) {
      alert(
        `${newContact.name} is already in contacts.`
      );
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const deleteListItem = (id) =>
    setContacts((prev) => prev.filter(
        (el) => el.id !== id
      ),
    );

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          stateChange={stateChange}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilter={handleFilter}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteListItem={deleteListItem}
        />
      </>
    );
  
}

export default App;