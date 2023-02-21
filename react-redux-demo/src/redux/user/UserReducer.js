import {FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILIURE } from './UserType'

const initialState={
    loading:false,
    data:[],
    error:""
}


export const UserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
             return{
                    loading:false,
                    data:action.payload,
                    error:""
                } 
          case FETCH_USER_FAILIURE:
             return{
                  loading:false,
                  data:[],
                   error:action.payload
                       } 
                 
    
        default:
            return state
    }
    }