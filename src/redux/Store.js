import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Productslice';
import cartReducer from './Cartslice';

// Configure and export the Redux store
const Store = configureStore({
  reducer: {
    product: productReducer,// product reducer to manage product-related state
    cart: cartReducer,//cart reducer to manage cart-related state
  }
});

export default Store;
