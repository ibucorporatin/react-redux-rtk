import {FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,FETCH_USER_FAILIURE} from './UserType'
import axios from 'axios'

export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
 
export const fetchUserSuccess=(data)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:data
    }
}
export const fetchUserFailiure=(data)=>{
    return{
        type:FETCH_USER_FAILIURE,
        payload:data
    }
}

export const fetchUser=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data
    dispatch(fetchUserSuccess(users))
        })
        .catch((error)=>{
            console.log(error)
            dispatch(fetchUserFailiure(error.message))
        })
    }
}