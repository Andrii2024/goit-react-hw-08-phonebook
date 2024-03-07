import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsApi, removeToken, setToken } from 'axiosConfig/contactsApi';

export const registerThunk = createAsyncThunk(
  'register',
  async (credential, thunkApi) => {
    try {
      const { data } = await contactsApi.post('users/signup', credential);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await contactsApi.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await contactsApi.post('users/logout');
    removeToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
