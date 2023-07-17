import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from './../../redux/selectors';
import { Label, Text, Submitbtn } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function handleInput(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  function handleSumbit(e) {
    e.preventDefault();

    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactExists) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSumbit}>
      <Text>Name</Text>
      <Label>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </Label>

      <Text>Number</Text>
      <Label>
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInput}
        />
      </Label>

      <Submitbtn type="submit">Add contact</Submitbtn>
    </form>
  );
}
