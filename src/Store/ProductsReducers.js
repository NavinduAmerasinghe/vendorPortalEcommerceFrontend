// Import constants
import * as actionTypes from "./constants";

// Create Redux reducers
import { combineReducers } from "redux";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return action.payload;

    case actionTypes.ADD_PRODUCT_SUCCESS:
      return [...state, action.payload];

    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return state.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );

    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return state.filter((product) => product._id !== action.payload);

    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
