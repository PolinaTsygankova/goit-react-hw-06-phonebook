import PropTypes from 'prop-types';
import { Item, DeleteBtn, Text } from './ContactItem.styled';

export function ContactItem({ name, number, id, onDelete }) {
  return (
    <>
      <Item key={id}>
        <div>
          <Text>
            {name}: {number}
          </Text>
        </div>

        <DeleteBtn type="button" onClick={() => onDelete(id)}>
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
  onDelete: PropTypes.func.isRequired,
};
