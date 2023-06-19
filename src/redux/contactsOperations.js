import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6490a4101e6aa71680cb98bb.mockapi.io/contacts/';

  
export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instanceContacts.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};
