// Import constants
import * as actionTypes from "../../Constants/ProductsConstants";

// Create Redux actions
export const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const addProductSuccess = (product) => ({
  type: actionTypes.ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductSuccess = (product) => ({
  type: actionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const deleteProductSuccess = (productId) => ({
  type: actionTypes.DELETE_PRODUCT_SUCCESS,
  payload: productId,
});
