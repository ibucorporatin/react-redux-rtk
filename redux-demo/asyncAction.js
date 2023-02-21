const redux=require('redux')
const axios=require("axios")
const thunkMiddlewar=require("redux-thunk").default
const createStore=redux.createStore
const applyMiddlewere=redux.applyMiddleware



const initialState={
    loading:false,
    data:[],
    error:""
}

const FETCH_USER_REQUEST="FETCH_USER_REQUEST_"
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"
const FETCH_USER_FAILIURE="FETCH_USER_FAILIURE"

const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSuccess=(data)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:data
    }
}
const fetchUserFailiure=(data)=>{
    return{
        type:FETCH_USER_FAILIURE,
        payload:data
    }
}


const reducer=(state=initialState,action)=>{
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

const fetchuser=()=>{
    return function (dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data.map(user=>user.id)
dispatch(fetchUserSuccess(users))
        })
        .catch((error)=>{
            dispatch(fetchUserFailiure(error.messsage))
        })
    }
}

const store=createStore(reducer,applyMiddlewere(thunkMiddlewar))

store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchuser())

// const fetchuser=()=>{
  
//         store.dispatch(fetchUserRequest())
//         axios.get('https://jsonplaceholder.typicode.com/users') // you normaly use same thing
//         .then((response)=>{
//             const users=response.data.map(user=>user.id)
//             store.dispatch(fetchUserSuccess(users))
//         })
//         .catch((error)=>{
//             store.dispatch(fetchUserFailiure(error.messsage))
//         })
//     }
// fetchuser()