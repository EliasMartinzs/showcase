import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './features/cars-slices';

export const store = configureStore({
  reducer: { cars: carsReducer },
});
