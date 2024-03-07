import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsApi } from 'axiosConfig/contactsApi';

// import axios from 'axios';

// const contctsAPI = axios.create({
//   baseURL: 'https://65e5cbd3d7f0758a76e76b61.mockapi.io/',
// });

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await contactsApi.get('/contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const { data } = await contactsApi.post('/contacts', newContact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await contactsApi.delete(`/contacts/${id}`);

      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
