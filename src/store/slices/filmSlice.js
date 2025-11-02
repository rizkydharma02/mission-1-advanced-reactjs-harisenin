import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import filmAPI from '../../service/api/filmAPI';

// Fetch all films
export const fetchFilm = createAsyncThunk('films/fetchFilm', async (_, { rejectWithValue }) => {
  try {
    const data = await filmAPI.getAllFilm();
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

// Fetch film by ID
export const fetchFilmById = createAsyncThunk('films/fetchFilmById', async (id, { rejectWithValue }) => {
  try {
    const data = await filmAPI.getFilmById(id);
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

// Add new film
export const addFilm = createAsyncThunk('films/addFilm', async (filmData, { rejectWithValue }) => {
  try {
    const data = await filmAPI.createFilm(filmData);
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

// Update film (PUT)
export const updatePutFilm = createAsyncThunk('films/updatePutFilm', async ({ id, filmData }, { rejectWithValue }) => {
  try {
    const data = await filmAPI.updatePutFilm(id, filmData);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Update film (PATCH)
export const updatePatchFilm = createAsyncThunk('films/updatePatchFilm', async ({ id, filmData }, { rejectWithValue }) => {
  try {
    const data = await filmAPI.updatePatchFilm(id, filmData);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Delete all films
export const deleteAllFilm = createAsyncThunk('films/deleteAllFilm', async (_, { rejectWithValue }) => {
  try {
    const data = await filmAPI.deleteAllFilm();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Delete film by ID
export const deleteFilmById = createAsyncThunk('films/deleteFilmById', async (id, { rejectWithValue }) => {
  try {
    const data = await filmAPI.deleteFilmById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// slice
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
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
  },

  extraReducers: (builder) => {
    // fetch all data
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // fetch data by id
    builder
      .addCase(fetchFilmById.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentFilm = action.payload;
      })
      .addCase(fetchFilmById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // create data
    builder
      .addCase(addFilm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // update put
    builder
      .addCase(updatePutFilm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updatePutFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updatePutFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // update patch
    builder
      .addCase(updatePatchFilm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updatePatchFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updatePatchFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // delete all data
    builder
      .addCase(deleteAllFilm.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteAllFilm.fulfilled, (state) => {
        state.isLoading = false;
        state.items = [];
      })
      .addCase(deleteAllFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    // delete data by id
    builder
      .addCase(deleteFilmById.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteFilmById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteFilmById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { clearError, clearCurrentFilm, setCurrentFilm } = filmSlice.actions;
export default filmSlice.reducer;
