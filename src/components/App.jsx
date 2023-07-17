// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, MainDiv, ContactTitle } from './App.styled';

export function App() {

  return (
    <MainDiv>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </MainDiv>
  );
}
