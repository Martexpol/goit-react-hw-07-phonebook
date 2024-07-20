import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiClient = axios.create({
  baseURL: "https://669bc0f6276e45187d365d4c.mockapi.io/api/v1",
});

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /contacts

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const response = await apiClient.post("/contacts", contact);
      return response.data;
    } catch (e) {
      return apiClient.rejectWithValue(e.message);
    }
  },
);

// DELETE @ /contacts
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID) => {
    try {
      const response = await apiClient.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (e) {
      return apiClient.rejectWithValue(e.message);
    }
  },
);
