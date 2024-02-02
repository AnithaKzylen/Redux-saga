import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,

  reducers: {
    addToCartSlice: (state, action) => {
      
      state.cart = [...state.cart, action.payload];
      return state;
    },

    removeFromCartSlice: (state, action) => {

      state.cart=state.cart.filter((item) => item.id !== action.payload);
      return state;
    },

    emptyCartSlice: (state) => {
      state.cart= []
      return state;

    },
    setProductList: (state, action) => {
      state.data = action.payload;
      return state;
    },
  },
});

export const { addToCartSlice, removeFromCartSlice, emptyCartSlice, setProductList } =
  productSlice.actions;

export default productSlice.reducer;
