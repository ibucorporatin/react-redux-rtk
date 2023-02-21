import { detailProduct } from "../../data";
import { actionTypes } from "../contans/actionTypes";

export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return [...payload];
    default:
      return state;
  }
};
export const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCTS_INTO_CART:
      return [...state, ...payload];
    case actionTypes.CLEAR_CART:
      return [];
    case actionTypes.REMOVE_A_ITEM_CART:
      return [...payload];
    case actionTypes.UPDATED_CART:
      return [...payload];
    default:
      return state;
  }
};
const initialTotal = {
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};
export const TOTALReducer = (state = initialTotal, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_TOTAL:
      return {
        ...payload,
      };
    default:
      return state;
  }
};
export const singleProductReducer = (
  state = detailProduct,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.SET_SINGLE_PRODUCTS:
      return { ...payload };
    default:
      return state;
  }
};
const initialModel = {
  modelOpen: false,
  modalProduct: detailProduct,
};
export const setModelReducer = (state = initialModel, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MODEL:
      return { ...payload };
    case actionTypes.CLOSE_MODEL:
      return {
        ...state,
        modelOpen: false,
      };
    default:
      return state;
  }
};
