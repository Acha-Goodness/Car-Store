import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    productList: [],
    producDetails: null
}

export const fetchAllFilteredProducts = createAsyncThunk("/products/fetchAllFilteredProducts", async ({filterParams, sortParams}) => {

    const query = new URLSearchParams({
        ...filterParams,
        sortBy: sortParams
    })

    const result = await axios.get(`http://localhost:3000/api/v1/shop/products/get?${query}`)
    return result?.data;
});

export const fetchProductsDetails = createAsyncThunk("/products/fetchProductsDetails", async (id) => {
    const result = await axios.get(`http://localhost:3000/api/v1/shop/products/get/${id}`)
    return result?.data;
});

const shoppingProductSlice = createSlice({
    name: "shopProducts",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchAllFilteredProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.productList = action.payload.data
        }).addCase(fetchAllFilteredProducts.rejected, (state, action) => {
            state.isLoading = false,
            state.productList = []
        }).addCase(fetchProductsDetails.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchProductsDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.producDetails = action.payload.data
        }).addCase(fetchProductsDetails.rejected, (state, action) => {
            state.isLoading = false,
            state.producDetails = null
        })
    }
})

export default shoppingProductSlice.reducer;