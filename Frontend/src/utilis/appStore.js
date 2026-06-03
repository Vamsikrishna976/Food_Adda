import { configureStore } from "@reduxjs/toolkit";;
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const appStore = configureStore(
    {
        reducer: {
            // Add your reducers here
            cart: cartReducer,
            auth: authReducer,
        }
    }
);


export default appStore;