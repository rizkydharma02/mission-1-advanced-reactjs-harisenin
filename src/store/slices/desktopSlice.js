import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import desktopAPI from '../../service/api/desktopAPI';

export const fetchDesktop = createAsyncThunk('desktop/fetchDesktop', async (_, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.getAllDesktop();
    return data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export const fetchDesktopById = createAsyncThunk('desktop/fetchDesktopById', async (id, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.getDesktopById(id);
    return data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export const addDesktop = createAsyncThunk('desktop/addDesktop', async (desktopData, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.createDesktop(desktopData);
    return data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export const updatePutDesktop = createAsyncThunk('desktop/updatePutDesktop', async ({ id, desktopData }, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.updatePutDesktop(id, desktopData);
    return data;
  } catch (error) {
    return isRejectedWithValue(error.message);
  }
});

export const updatePatchDesktop = createAsyncThunk('desktop/updatePatchDesktop', async ({ id, desktopData }, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.updatePatchDesktop(id, desktopData);
    return data;
  } catch (error) {
    return isRejectedWithValue(error.message);
  }
});

export const deleteAllDesktop = createAsyncThunk('desktop/deleteAllDesktop', async (_, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.deleteAllDesktop();
    return data;
  } catch (err) {
    return isRejectedWithValue(err.message);
  }
});

export const deleteDesktopById = createAsyncThunk('desktop/deleteDesktopById', async (id, { isRejectedWithValue }) => {
  try {
    const data = await desktopAPI.deleteDesktopById(id);
    return data;
  } catch (err) {
    return isRejectedWithValue(err.message);
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
    setCurrentDesktop: (state, action) => {
      state.currentDesktop = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetch all data
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

    // fetch data by id
    builder.addCase(fetchDesktopById.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchDesktopById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentDesktop = action.payload;
    });
    builder.addCase(fetchDesktopById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // add data
    builder.addCase(addDesktop.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(addDesktop.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    });
    builder.addCase(addDesktop.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    //put  update data by id
    builder.addCase(updatePutDesktop.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(updatePutDesktop.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
    builder.addCase(updatePutDesktop.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // patch update data by id
    builder.addCase(updatePatchDesktop.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(updatePatchDesktop.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
    builder.addCase(updatePatchDesktop.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // delete all data
    builder.addCase(deleteAllDesktop.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(deleteAllDesktop.fulfilled, (state) => {
      state.isLoading = true;
      state.items = [];
    });
    builder.addCase(deleteAllDesktop.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // delete data by id
    builder.addCase(deleteDesktopById.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(deleteDesktopById.fulfilled, (state, action) => {
      state.isLoading = true;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    });
    builder.addCase(deleteDesktopById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { clearError, clearCurrentDesktop } = desktopSlice.actions;
export default desktopSlice.reducer;
