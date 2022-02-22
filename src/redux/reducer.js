// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import {
  stateChange,
  deleteListItem,
  handleFilter,
} from "./actions";

const contactsArr = [
  {
    id: "id-1",
    name: "Rosie Simpson",
    number: "459-12-56",
  },
  {
    id: "id-2",
    name: "Hermione Kline",
    number: "443-89-12",
  },
  {
    id: "id-3",
    name: "Eden Clements",
    number: "645-17-79",
  },
  {
    id: "id-4",
    name: "Annie Copeland",
    number: "227-91-26",
  },
];

const stateChangeReducer =
  createReducer(contactsArr, builder => {
    builder
      .addCase(stateChange, (state, action) => [
        ...state,
        action.payload,
      ])
      .addCase(deleteListItem, (state, action) =>
        state.filter(
          (el) => el.id !== action.payload
        )
      );
  });

// const stateChangeReducer = (state = contactsArr, action) => {
//     switch (action.type) {
//         case "newContact/add":
//             return [...state, action.payload];
//         case "id/delete":
//             return state.filter(
//             (el) => el.id !== action.payload
//             );
//         default: return state;
//     }
// }

const handleFilterReducer = createReducer(
  "",
  (builder) => {
    builder.addCase(
      handleFilter,
      (_, action) => action.payload
    );
  }
);

// const handleFilterReducer = ( state = "", action ) => {
//     switch (action.type) {
//         case "value/filter":
//             return action.payload;
        
//         default:
//             return state;
//     }
// };

const contactReduce = combineReducers({
  items: stateChangeReducer,
  filter: handleFilterReducer,
});

export default contactReduce;