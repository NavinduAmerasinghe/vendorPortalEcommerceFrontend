// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    fetchProductsSuccess(state, action) {
      return action.payload;
    },
    addProductSuccess(state, action) {
      state.push(action.payload);
    },
    updateProductSuccess(state, action) {
      const updatedProduct = action.payload;
      const index = state.findIndex(
        (product) => product._id === updatedProduct._id
      );
      if (index !== -1) {
        state[index] = updatedProduct;
      }
    },
    deleteProductSuccess(state, action) {
      const productId = action.payload;
      return state.filter((product) => product._id !== productId);
    },
  },
});

export const {
  fetchProductsSuccess,
  addProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
