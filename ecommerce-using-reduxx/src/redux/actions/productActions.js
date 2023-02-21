import axios from "axios";
import { useSelector } from "react-redux";
import { getProducts } from "../../servise/api";
import store from "../store";

import {
  addProductInToCart,
  clearCart,
  removeItemInCart,
  setM,
  setProducts,
  setSProduct,
  setTotal,
  updatedCart,
} from "./productAction1";

export const fetchProducts = () => {
  return async (dispatch,getState) => {
    console.log(getState())
    const res = await getProducts()
    const modifiedProducts = res.data.map((product) => {
      product.inCart = false;
      product.count = 0;
      product.total = 0;
      return product;
    });
    // console.log(modifiedProducts);
    dispatch(setProducts(modifiedProducts));
  };
};

// //   //  add to cart

export const addToCart = (id) => {
  return async (dispatch) => {
    const products = store.getState().allProducts;

    let tempProducts = [...products];
    const index = products.find((item) => {
      return item.id === id;
    });

    tempProducts.map((item) => {
      if (item.id === id) {
        item.inCart = true;
        item.count = 1;
        const price = item.price;
        item.total = price;
        return item;
      }
      return item;
    });
    const product = tempProducts.filter((item) => {
      return item.id === id;
    });

    dispatch(addProductInToCart(product));
    dispatch(setProducts(tempProducts));
  };
};

export const addTotals = () => {
  return async (dispatch) => {
    const cart = store.getState().cart;
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    const totals = {
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    };
    dispatch(setTotal(totals));
  };
};
export const setSingleProduct = (id) => {
  return async (dispatch) => {
    const products = store.getState().allProducts;
    const product = products.filter((item) => item.id === id);
    dispatch(setSProduct(...product));
  };
};
export const setModel = (id) => {
  return async (dispatch) => {
    const products = store.getState().allProducts;
    const product = products.filter((item) => item.id === id);
    const a = product[0];
    const Model = {
      modelOpen: true,
      modalProduct: a,
    };
    dispatch(setM(Model));
  };
};
export const clearCartRelatedData = () => {
  return async (dispatch) => {
    const products = store.getState().allProducts;
    const clearedProduct = products.map((product) => {
      if (product.inCart) {
        product.inCart = false;
        product.count = 0;
        product.total = 0;

        return product;
      }
      return product;
    });

    dispatch(clearCart());
    dispatch(setProducts(clearedProduct));
  };
};

export const removeItem = (id) => {
  return async (dispatch) => {
    const products = store.getState().allProducts;
    const cart = store.getState().cart;
    const remainCart = cart.filter((item) => item.id !== id);
    const remainProducts = products.map((product) => {
      if (product.id === id) {
        product.inCart = false;
        product.total = 0;
        product.count = 0;
        return product;
      } else {
        return product;
      }
    });
    dispatch(removeItemInCart(remainCart));
    dispatch(setProducts(remainProducts));
  };
};
export const increment = (id) => {
  return async (dispatch) => {
    const cart = store.getState().cart;
    const updatedCar = cart.map((item) => {
      if (item.id === id) {
        item.count = item.count + 1;
        item.total = item.count * item.price;
        return item;
      } else {
        return item;
      }
    });
    dispatch(updatedCart(updatedCar));
  };
};

export const decrement = (id) => {
  return async (dispatch) => {
    const cart = store.getState().cart;
    const updatedCart1 = cart.map((item) => {
      if (item.id === id) {
        item.count = item.count - 1;
        item.total = item.count * item.price;
        return item;
      } else {
        return item;
      }
    });
    const thatItem = updatedCart1.filter((item) => item.id === id);

    if (thatItem[0].count === 0) {
      dispatch(removeItem(id));
    } else {
      console.log("it is in decrement", updatedCart1);
      dispatch(updatedCart(updatedCart1));
    }
  };
};
