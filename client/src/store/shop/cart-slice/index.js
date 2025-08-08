const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})