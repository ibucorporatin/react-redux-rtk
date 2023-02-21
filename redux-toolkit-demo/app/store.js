const configureStore=require("@reduxjs/toolkit").configureStore
const cakeReducer=require("../feautures/cake/cakeSlice")
const userReducer=require("../feautures/user/userSlice")
const iceCreamReducer = require("../feautures/iceCream/iceCreamSlice")
const reduxLogger=require("redux-logger")
const logger=reduxLogger.createLogger()

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        users:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

module.exports=store