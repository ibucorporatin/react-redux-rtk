import { actionTypes } from "../contans/actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const addProductInToCart = (products) => {
  return {
    type: actionTypes.ADD_PRODUCTS_INTO_CART,
    payload: products,
  };
};
export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
    payload: [],
  };
};
export const removeItemInCart = (payload) => {
  return {
    type: actionTypes.REMOVE_A_ITEM_CART,
    payload: payload,
  };
};
export const updatedCart = (payload) => {
  return {
    type: actionTypes.UPDATED_CART,
    payload: payload,
  };
};
export const setTotal = (products) => {
  return {
    type: actionTypes.SET_TOTAL,
    payload: products,
  };
};
export const setSProduct = (products) => {
  return {
    type: actionTypes.SET_SINGLE_PRODUCTS,
    payload: products,
  };
};
export const setM = (products) => {
  return {
    type: actionTypes.SET_MODEL,
    payload: products,
  };
};
export const closeM = () => {
  return {
    type: actionTypes.CLOSE_MODEL,
    payload: {},
  };
};
