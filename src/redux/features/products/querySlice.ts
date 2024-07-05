import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './type';
import { data } from '../../../components/Personalize/Personalize'

export const getProducts: any = createAsyncThunk(
   'product/getProducts',
   async () => {
      const response = await axios.post<Product[]>('http://127.0.0.1:8000/recommend/get-combinedrec/', data)

      return response.data;
   }
)

interface ProductState {
   querys: Product[];
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null;
}

const initialState: ProductState = {
   querys: [],
   status: 'idle',
   error: null,
};
const querySlice = createSlice({
   name: 'query',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProducts.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Add any fetched products to the array
            state.querys = action.payload;
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
         });
   },
});
export default querySlice.reducer