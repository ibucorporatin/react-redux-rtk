import {combineReducers} from "redux" 
import { productReducer, selectedProduct, cart } from "./ProductReducer"

 const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProduct ,
    cart:cart,
   
   
}) 

export default reducers;