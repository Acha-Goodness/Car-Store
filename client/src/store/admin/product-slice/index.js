import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    productList : []
}

const addNewProduct = createAsyncThunk("/products/addnewproduct", async (formData) => {
    const result = await axios.post("http://localhost:3000/api/v1/admin/products/add", formData, {
        hearders: {
            "Content-Type" : "application/json"
        },
    })
    return result?.data;
});

const AdminProductsSlice = createSlice({
    name: "adminPoducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})