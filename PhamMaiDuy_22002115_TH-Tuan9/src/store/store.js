import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;