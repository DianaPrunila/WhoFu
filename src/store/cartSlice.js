import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const prod = { ...payload, quantityToBuy: 1 };

      const indexProductId = state.products.findIndex(
        (p) => p.id === payload.id
      );
      if (indexProductId >= 0) {
        state.products[indexProductId].quantityToBuy += 1;
      } else {
        state.products = [...state.products, prod];
      }
    },
    clearCart: (state) => {
      state.products = [];
      console.log(state.products);
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((item) => item.id !== payload.id);
    },
    increase: (state, { payload }) => {
      const cartItem = state.products.find((item) => item.id === payload.id);
      cartItem.quantityToBuy = cartItem.quantityToBuy + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.products.find((item) => item.id === payload.id);
      if (cartItem.quantityToBuy > 0) {
        cartItem.quantityToBuy = cartItem.quantityToBuy - 1;
      } else {
        state.products = state.products.filter(
          (item) => item.id !== payload.id
        );
      }
    },
    calculateTotalPrice: (state) => {
      let initQuantity = 0;
      let initFinalPrice = 0;
      state.products.forEach((item) => {
        initQuantity += item.quantityToBuy;
        initFinalPrice += item.quantityToBuy * item.price;
      });
      state.totalQuantity = initQuantity;
      state.finalPrice = initFinalPrice;
    },
  },
});

export const { add, removeItem, increase, decrease, calculateTotalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
