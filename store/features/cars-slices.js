import { createSlice } from '@reduxjs/toolkit';

const CARS_INITIAL_STATE = {
  manufacturer: '',
  model: '',
};

export const carsSlice = createSlice({
  name: 'carsManufacturer',
  initialState: CARS_INITIAL_STATE,
  reducers: {
    addManufacturer(state, action) {
      state.manufacturer = action.payload;
    },
    addModel(state, action) {
      state.model = action.payload;
    },
  },
});

export const { addManufacturer, addModel } = carsSlice.actions;
export default carsSlice.reducer;
