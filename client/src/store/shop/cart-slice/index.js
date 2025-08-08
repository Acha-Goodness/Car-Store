import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    isLoading: false
}

export const addToCart = createAsyncThunk("/cart/addToCart", async({userId, productId, quantity}) => {
    const response = await axios.post("http://localhost:3000/api/v1/shop/cart/add", {
        userId,
        productId,
        quantity
    })
    return response.data
}) 

export const fetchCartItems = createAsyncThunk("/cart/fetchCartItems", async({userId}) => {
    const response = await axios.get(`http://localhost:3000/api/v1/shop/cart/get/${userId}`)
    return response.data
}) 

export const updateCart = createAsyncThunk("/cart/updateCart", async({userId, productId, quantity}) => {
    const response = await axios.put("http://localhost:3000/api/v1/shop/cart/update-cart", {
        userId,
        productId,
        quantity
    })
    return response.data
}) 

export const deleteCartItems = createAsyncThunk("/cart/deleteCartItems", async({userId, productId}) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/shop/cart/${userId}/${productId}`)
    return response.data
}) 
 

const shoppingCartSlice = createSlice({
    name: "shopCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addToCart.pending, (state) => {
            state.isLoading = true
        }).addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload.data
        }).addCase(addToCart.rejected, (state) => {
            state.isLoading = false
            cartItems = []
        }).addCase(fetchCartItems.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload.data
        }).addCase(fetchCartItems.rejected, (state) => {
            state.isLoading = false
            cartItems = []
        }).addCase(updateCart.pending, (state) => {
            state.isLoading = true
        }).addCase(updateCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload.data
        }).addCase(updateCart.rejected, (state) => {
            state.isLoading = false
            cartItems = []
        }).addCase(deleteCartItems.pending, (state) => {
            state.isLoading = true
        }).addCase(deleteCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload.data
        }).addCase(deleteCartItems.rejected, (state) => {
            state.isLoading = false
            cartItems = []
        })
    }
})

export default shoppingCartSlice.reducer