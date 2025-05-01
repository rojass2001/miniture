import { createSlice } from "@reduxjs/toolkit"

// Initial state structure
const INITIAL_STATE = {
  allproduct: [],        // Original list of all products
  filterproducts: [],    // Filtered list to display based on category/price/search
  detail: false,         // (Unused) Could be used to toggle product detail view
  productdetails: [],    // Details of the selected product for viewing
};

const productslice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,

  reducers: {

    // 🔄 Set the full list of products (from API or static data)
    setproducts: (state, action) => {
      state.allproduct = action.payload;
    },

    // 🔍 Filter products by category or type
    productfilter: (state, action) => {
      const a = action.payload;
      state.filterproducts = state.allproduct.filter(
        (item) => item.category === a || item.types === a
      );
    },

    // 💰 Filter products by max price
    pricefilter: (state, action) => {
      const a = action.payload;
      state.filterproducts = state.allproduct.filter(
        (item) => item.price <= a
      );
    },

    // 🔎 Search products by name or type
    searchproducts: (state, action) => {
      state.filterproducts = state.allproduct.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        item.types.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    // 📄 Store a product's detail in state and add quantity + subtotal fields
    productdetailcontain: (state, action) => {
      const b = action.payload;
      const productdetail = { ...b, quantity: 1, subtotal: b.price };
      state.productdetails = productdetail;
    },

    // 🔼 Increase quantity in product details
    increase: (state) => {
      state.productdetails.quantity += 1;
      state.productdetails.subtotal += state.productdetails.price;
    },

    // 🔽 Decrease quantity in product details (not below 1)
    decrease: (state) => {
      if (state.productdetails.quantity > 1) {
        state.productdetails.quantity -= 1;
        state.productdetails.subtotal -= state.productdetails.price;
      }
    }
  }
});

// Export actions and reducer
export const {
  setproducts,
  productfilter,
  increase,
  decrease,
  pricefilter,
  searchproducts,
  productdetailcontain
} = productslice.actions;

export default productslice.reducer;
