import { createAction } from "@reduxjs/toolkit";

// const stateChange = (newContact) => ({
//     type: "newContact/add",
//     payload: newContact,
// });

export const stateChange = createAction("newContact/add");

// const handleFilter = (value) => ({
//   type: "value/filter",
//   payload: value,
// });

export const handleFilter = createAction("value/filter");

// const deleteListItem = (id) => ({
//   type: "id/delete",
//   payload: id,
// });

export const deleteListItem = createAction("id/delete");

// export {
//   stateChange,
//   handleFilter,
//   deleteListItem,
// };
