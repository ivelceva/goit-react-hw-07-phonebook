import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6490a4101e6aa71680cb98bb.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', item);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// import * as Api from '../components/API/Api';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetch',
//   async (_, thunkApi) => {
//     try {
//       const data = await Api.getContacts();
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contact/add',
//   async ({ name, phone }, { rejectWithValue }) => {
//     try {
//       const result = await Api.addContact({ name, phone });
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contact/delete',
//   async (id, { rejectWithValue }) => {
//     try {
//       await Api.deleteContact(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
