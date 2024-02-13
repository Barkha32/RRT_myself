import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import  foodDetail from "./slices/foodSlice";
// Complete CRUD APP using Redux Toolkit and createAsyncThunk | API call using Redux Toolkit
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        food: foodDetail,
    },
});