import {createStore,applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'; //is for redux dev toolextension
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from "./RootReducer"


const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

export default store