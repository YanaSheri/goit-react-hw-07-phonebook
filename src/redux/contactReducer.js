import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { handleFilter } from "./contactActions";
import { getContact, addContact, removeContact } from './contactOperations';

const stateChangeReducer =
  createReducer([], {
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [getContact.fulfilled]: (_, { payload }) => payload,
    [removeContact.fulfilled]: (state, { payload }) => state.filter((el) => el.id !== payload)
  });

const handleFilterReducer = createReducer(
  "", {[handleFilter]: (_, { payload }) => payload
});
  
const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [getContact.rejected]: setError,
  [getContact.pending]: resetError,
});

export default combineReducers({
  items: stateChangeReducer,
  filter: handleFilterReducer,
  error: errorReducer,
});


// const itemsReducer = createReducer([], {
//   [addContact.fulfilled]: (
//     state,
//     { payload }
//   ) => {
//     const addContact = [...state, payload];
//     return addContact;
//   },
//   [getContacts.fulfilled]: (_, { payload }) =>
//     payload,
//   [removeContact.fulfilled]: (
//     state,
//     { payload }
//   ) => {
//     const removeContact = state.filter(
//       ({ id }) => id !== payload
//     );
//     return removeContact;
//   },
// });

// const filterReducer = createReducer("", {
//   [filterContacts]: (_, { payload }) => payload,
// });


// const contactReduce = combineReducers({
//   items: stateChangeReducer,
//   filter: handleFilterReducer,
// });

// export default contactReduce;