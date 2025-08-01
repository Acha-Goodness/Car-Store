import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsReducer from "./admin/product-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProductsReducer,
    },
});

export default store;