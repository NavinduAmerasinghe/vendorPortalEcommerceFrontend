// productActions.js
import axios from "axios";
import {
  fetchProductsSuccess,
  addProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
} from "./productSlice";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/products");
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post("/api/products", product);
    dispatch(addProductSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct =
  (productId, updatedProduct) => async (dispatch) => {
    try {
      const response = await axios.put(
        `/api/products/${productId}`,
        updatedProduct
      );
      dispatch(updateProductSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`/api/products/${productId}`);
    dispatch(deleteProductSuccess(productId));
  } catch (error) {
    console.log(error);
  }
};
