import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Productslice';
import cartReducer from './Cartslice';

// Configure and export the Redux store
const Store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  }
});

export default Store;
