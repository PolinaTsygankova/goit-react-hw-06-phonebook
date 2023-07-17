import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export function ContactList() {
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contactList?.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <List>
      {filteredContacts?.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
}
