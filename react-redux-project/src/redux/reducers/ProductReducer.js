import { ActionTypes } from "../contants/ActionTypes";

const initialState={
    products:[],
}
export const productReducer = (state=initialState,{type,payload})=>{
 
      switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,products:payload
            }
        default:
            return state
      }
}

export const selectedProduct = (state={},{type,payload}) =>{
 
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,...payload
            }
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {
                    
                }
        default:
            return state
      }
}


export const cart=(state=[],{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_PRODUCTS:
            return [
                ...state,payload
            ]
            case ActionTypes.REMOVE_PRODUCTS:
                return [
                    ...payload
                ]
                case ActionTypes.UPDATE_PRODUCTS:
                    return [
                        ...payload
                    ]
        default:
            return state
      }

}