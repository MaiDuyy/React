import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    rest: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement ,rest } = counterSlice.actions;


export default counterSlice.reducer;
