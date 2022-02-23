import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactApi,
  getContactApi,
  removeContactApi,
} from "../utils/mockApi";

export const getContact = createAsyncThunk(
  "contact/get",
  async (_, thunkApi) => {
    try {
      const contacts = await getContactApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      );
    }
  }
);
export const addContact = createAsyncThunk(
  "contact/add",
  async (newContact, thunkApi) => {
    try {
      const contacts = await addContactApi(
        newContact
      );
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      );
    }
  }
);
export const removeContact = createAsyncThunk(
  "contact/delete",
  async (id, thunkApi) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      );
    }
  }
);
