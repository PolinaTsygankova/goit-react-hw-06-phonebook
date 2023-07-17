import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },

    filterContacts(state, action) {
      state.filter = action.payload.trim();
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
