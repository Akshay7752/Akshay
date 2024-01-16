import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
