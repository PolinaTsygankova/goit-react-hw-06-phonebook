import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/contactsSlice';
import { Title, Label } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <Title>Find contacts by name</Title>
      <Label>
        <input
          type="text"
          name="filter"
          required
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </Label>
    </>
  );
}
