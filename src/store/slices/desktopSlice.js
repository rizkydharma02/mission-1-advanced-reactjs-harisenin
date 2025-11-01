import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_MOCKAPI_API_DESKTOP_URL;

export const fetchDesktop = createAsyncThunk('desktop/fetchDesktop', async (_, { isRejectedWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return isRejectedWithValue(err.response?.data || 'Failed to get data desktop');
  }
});

const desktopSlice = createSlice({
  name: 'desktop',
  initialState: {
    items: [],
    currentDesktop: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    clearError: (state) => {
      state.isError = null;
    },
    clearCurrentDesktop: (state) => {
      state.currentDesktop = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDesktop.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchDesktop.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchDesktop.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { clearError, clearCurrentDesktop } = desktopSlice.actions;
export default desktopSlice.reducer;
