import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setItems(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const { setItems } = inputSlice.actions;

export default inputSlice.reducer;
