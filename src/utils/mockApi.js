import axios from "axios";

axios.defaults.baseURL = "https://62150163cdb9d09717a9c248.mockapi.io";

export const addContactApi = (newContact) => {
  return axios
    .post("/contacts", newContact)
    .then(({ data }) => data)
    .catch((err) => err);
};

export const getContactApi = () => {
  return axios
    .get("/contacts")
    .then(({ data }) => console.log(data))
    .catch((err) => err);
};

export const removeContactApi = (id) => {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => id)
    .catch((err) => err);
};