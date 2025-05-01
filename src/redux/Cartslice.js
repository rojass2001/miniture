import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

// Initial cart state
const INITIAL_STATE = {
  cartproducts: [], // Array of products added to cart
  totalprice: 0,     // Total price of all products in the cart
};

const cartslice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    // ➕ Add item to cart
    addtocart: (state, action) => {
      const newitem = action.payload;
      const itemindex = state.cartproducts.find((item) => item.id === newitem.id);

      // If item already exists in cart
      if (itemindex) {
        toast.error(`${itemindex.name} already exists in cart`);
      } else {
        // Push new item with quantity and subtotal
        state.cartproducts.push({
          id: newitem.id,
          image: newitem.image,
          name: newitem.name,
          price: newitem.price,
          category: newitem.category,
          quantity: newitem.quantity ? newitem.quantity : 1,
          subtotal: newitem.subtotal ? newitem.subtotal : newitem.price
        });
        toast.success(`${newitem.name} added successfully to cart`);

        // Update total price
        state.totalprice += newitem.subtotal ? newitem.subtotal : newitem.price;
      }
    },

    // 🔼 Increase quantity of an item
    cartincrease: (state, action) => {
      const cartitem = action.payload;
      const itemindex = state.cartproducts.find((item) => item.id === cartitem);

      if (itemindex) {
        itemindex.quantity += 1;
        itemindex.subtotal += itemindex.price;
        state.totalprice += itemindex.price;
      }
    },

    // 🔽 Decrease quantity of an item (min 1)
    cartdecrease: (state, action) => {
      const cartitem = action.payload;
      const itemindex = state.cartproducts.find((item) => item.id === cartitem);

      if (itemindex && itemindex.quantity > 1) {
        itemindex.quantity -= 1;
        itemindex.subtotal -= itemindex.price;
        state.totalprice -= itemindex.price;
      }
    },

    // ❌ Remove item from cart
    removecart: (state, action) => {
      const cartitem = action.payload;
      const itemindex = state.cartproducts.findIndex((item) => item.id === cartitem.id);

      if (itemindex >= 0) {
        state.totalprice -= cartitem.subtotal; // Deduct from total price
        state.cartproducts.splice(itemindex, 1); // Remove item
      }
    }
  }
});

// Export actions and reducer
export const { addtocart, cartincrease, cartdecrease, removecart } = cartslice.actions;
export default cartslice.reducer;
