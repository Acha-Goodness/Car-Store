import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    productList : []
}

export const addNewProduct = createAsyncThunk("/products/addnewproduct", async (formData) => {
    const result = await axios.post("http://localhost:3000/api/v1/admin/products/add", formData, {
        hearders: {
            "Content-Type" : "application/json"
        },
    })
    return result?.data;
});

export const fetchAllProducts = createAsyncThunk("/products/fetchAllProducts", async () => {
    const result = await axios.get("http://localhost:3000/api/v1/admin/products/get")
    return result?.data;
});

export const editProducts = createAsyncThunk("/products/editProducts", async ({ id, formData }) => {
    const result = await axios.post(`http://localhost:3000/api/v1/admin/products/edit/:${id}`, formData, {
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