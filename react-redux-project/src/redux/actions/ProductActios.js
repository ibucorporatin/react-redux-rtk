import FakeStoreApi from "../../apis/FakeStoreApi";
import { ActionTypes } from "../contants/ActionTypes";
export const fetchProducts = () => {
  return async (dispatch) => {
    const respone = await FakeStoreApi("/products").catch((err) =>
      console.log(err)
    );
   
    dispatch(setProduct(respone.data.products));
  };
};
export const fetchProduct = (productid) => {
  return async (dispatch) => {
    const respone = await FakeStoreApi(`/products/${productid}`).catch((err) =>
      console.log(err)
    );
    dispatch(selectedProduct(respone.data));
  };
};
// export const addProductFunction=(productid)=>{
//     return (dispatch)=>{
//         const respone=await FakeStoreApi(`/products/${productid}`).catch((err)=>
//         console.log(err)
//         )
//         dispatch(addProductsIntoCarts(respone.data))
//     }
// }
export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addProductsIntoCarts = (products) => {
  return {
    type: ActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};
export const removeProductsIntoCarts = (products) => {
  return {
    type: ActionTypes.REMOVE_PRODUCTS,
    payload: products,
  };
};
export const updateProductsIntoCarts = (products) => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS,
    payload: products,
  };
};
