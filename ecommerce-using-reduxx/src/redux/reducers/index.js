import { combineReducers } from "redux";
import { setTotal } from "../actions/productAction1";
import {
  cartReducer,
  productReducer,
  setModelReducer,
  singleProductReducer,
  TOTALReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  cart: cartReducer,
  total: TOTALReducer,
  product: singleProductReducer,
  model: setModelReducer,
});

export default reducers;
