import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './type';

export const fetchProducts: any = createAsyncThunk(
   'product/fetchProducts',
   async () => {
      const response = await axios.post<Product[]>('http://127.0.0.1:8000/recommend/get-historyrec/');
      return response.data;
   }
);


interface ProductState {
   products: Product[];
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null;
}

const initialState: ProductState = {
   products: [],
   status: 'idle',
   error: null,
};

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Add any fetched products to the array
            state.products = action.payload;
         })
         .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
         });
   },
});

export default productSlice.reducer;