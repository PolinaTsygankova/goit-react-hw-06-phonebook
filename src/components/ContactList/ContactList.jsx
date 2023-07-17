import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';

import { List } from './ContactList.styled';

export function ContactList() {
  const contactList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
