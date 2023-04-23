import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isExist: false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((c) => c.id === action.payload.id);
      if (item) {
        state.isExist =  true
      } else {
        state.isExist =  false
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, actions) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity--;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
