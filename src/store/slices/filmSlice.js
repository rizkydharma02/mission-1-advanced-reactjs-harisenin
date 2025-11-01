import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_MOCKAPI_API_FILMS_URL;

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Failed to get data films');
  }
});

const filmSlice = createSlice({
  name: 'films',
  initialState: {
    items: [],
    currentFilm: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    clearError: (state) => {
      state.isError = null;
    },
    clearCurrentFilm: (state) => {
      state.currentFilm = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { cleanError, clearCurrentFilm } = filmSlice.actions;
export default filmSlice.reducer;
