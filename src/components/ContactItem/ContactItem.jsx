import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contactsSlice';
import { Item, DeleteBtn, Text } from './ContactItem.styled';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <Item key={id}>
        <div>
          <Text>
            {name}: {number}
          </Text>
        </div>

        <DeleteBtn type="button" onClick={() => dispatch(deleteContact())}>
          Delete
        </DeleteBtn>
      </Item>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
