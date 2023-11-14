import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { contactApi } from 'redux/auth/operations';


export const fetchDataThunk = createAsyncThunk(
    'fetchAll',
    async (_, thunkApi) => {
        try {
            const { data } = await contactApi.get('contacts');
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
            const { data } = await contactApi.delete(`contacts/${id}`);
            return data;
        } catch (error) {
            return thunkApi.fulfillWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const { data } = await contactApi.post('/contacts', contact);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
