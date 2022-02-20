const stateChange = (newContact) => ({
    type: "newContact/add",
    payload: newContact,
});

const handleFilter = (value) => ({
    type: "value/filter",
    payload: value,
});

const deleteListItem = (id) => ({
    type: "id/delete",
    payload: id,
});

export {
    stateChange,
    handleFilter,
    deleteListItem,
};