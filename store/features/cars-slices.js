import { createSlice } from '@reduxjs/toolkit';

const CARS_INITIAL_STATE = {
  manufacturer: '',
  model: '',
};

export const carsSlice = createSlice({
  name: 'carsManufacturer',
  initialState: CARS_INITIAL_STATE,
  reducers: {
    setManufacturer(state, action) {
      state.manufacturer = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
  },
});

export const { setManufacturer, setModel } = carsSlice.actions;
export default carsSlice.reducer;
