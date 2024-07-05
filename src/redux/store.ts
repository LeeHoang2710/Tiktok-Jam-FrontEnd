import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import queryReducer from './features/products/querySlice';

export const store = configureStore({
   reducer: {
      product: productReducer,
      query: queryReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch