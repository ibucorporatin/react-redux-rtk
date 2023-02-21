// const configureStore=require("@reduxjs/toolkit").configureStore
// const cakeReducer=require("../feautures/cake/cakeSlice")
// const userReducer=require("../feautures/user/userSlice")
// const iceCreamReducer = require("../feautures/iceCream/iceCreamSlice")
// const reduxLogger=require("redux-logger")
// const logger=reduxLogger.createLogger()

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feautures/cake/cakeSlice";
import iceCreamReducer from "../feautures/iceCream/iceCreamSlice";
import userReducer from "../feautures/user/userSlice";
 
export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer,
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});

