const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    isLoading: false,
    productList: []
}

export const fetchAllFilteredProducts = createAsyncThunk("/products/fetchAllFilteredProducts", async () => {
    const result = await axios.get("http://localhost:3000/api/v1/shop/products/get")
    return result?.data;
});

const shoppingProductSlice = createSlice({
    name: "shoppingProducts",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchAllFilteredProducts.pending, (state) => {
            state.isLoading = TruckElectric;
        }).addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.productList = action.payload
        })
    }
})