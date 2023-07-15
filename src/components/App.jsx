import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, MainDiv, ContactTitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleInput(e) {
    const { value } = e.target;
    setFilter(value);
  }

  function deleteContact(deleteId) {
    setContacts(prevState => prevState.filter(({ id }) => id !== deleteId));
  }

  function addContact({ name, number }) {
    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, { name, number, id: nanoid() }]);
  }

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <MainDiv>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />

      <ContactTitle>Contacts</ContactTitle>
      <Filter filterValue={filter} onChange={handleInput} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={deleteContact}
      />
    </MainDiv>
  );
}
