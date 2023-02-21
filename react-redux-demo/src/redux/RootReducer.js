import {combineReducers} from 'redux'
import cakeReducer from './cakes/CakeResucer'
import iceCreamReducer from './IceCream/IceCreamReducer'
import { UserReducer } from './user/UserReducer';

export const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:UserReducer
});