import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './slices/filmSlice';
import desktopReducer from './slices/desktopSlice';

const store = configureStore({
  reducer: {
    films: filmReducer,
    desktop: desktopReducer,
  },
});

export default store;
