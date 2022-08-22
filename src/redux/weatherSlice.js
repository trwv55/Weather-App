import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosCoordsWeather = createAsyncThunk(
  'weather/axiosCoordsWeatherStatus',
  async ({ lat, lon, apiKey }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    );
    return data;
  },
);

export const axiosWeather = createAsyncThunk(
  'weather/axiosWeatherStatus',
  async ({ inputValue, apiKey }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [axiosWeather.pending]: (state) => {
      state.items = [];
      state.status = 'loading';
    },
    [axiosWeather.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'succeed';
    },
    [axiosWeather.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setItems } = weatherSlice.actions;

export default weatherSlice.reducer;