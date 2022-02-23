// import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactApi } from "./utils/mockApi";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactApi());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </>
  );
}

export default App;
