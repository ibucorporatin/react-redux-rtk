const redux=require('redux')
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
const combaineReducer=redux.combineReducers
const applyMiddlewere=redux.applyMiddleware// it help to include middeleware
const logger= reduxLogger.createLogger()

const Buy_Cake="BUY_CAKE";
const Buy_ICECREAM="BUY_ICECREAM";
const Buy_JUICE="BUY_JUICE";

const initialCAkE={
    noOfCake:10
}
const initialICECREAM={
    noOFICECREAM:30
}
const initialJUICE={
   noOfJUICE:20
}
function buyCake(){
    return {
        type:Buy_Cake,
        info:"first redux action"
    }
}
function buyICECREAM(){
    return {
        type:Buy_ICECREAM,
        info:"first redux action for ice"
    }
}
function buyJUICE(){
    return {
        type:Buy_JUICE,
        info:"first redux action for juice"
    }
}
const CAKEreducer=(state=initialCAkE,action)=>{
  
    switch (action.type) {
        case Buy_Cake :
        return{
            ...state,noOfCake:state.noOfCake-1
        }
    
        default:
            return state
    }

}
const ICECREAMreducer=(state=initialICECREAM,action)=>{
  
    switch (action.type) {
        case Buy_ICECREAM :
        return{
            ...state,noOFICECREAM:state.noOFICECREAM-1
        }
    
        default:
            return state
    }

}
const JUICEreducer=(state=initialJUICE,action)=>{
  
    switch (action.type) {
        case Buy_JUICE :
        return{
            ...state,noOfJUICE:state.noOfJUICE-1
        }
    
        default:
            return state
    }

}
//  use same reducer fot multiple propperty
// const initial ={
//     noOfCake:10,
//     noOfICECREAM:20
// }
// const reducer=(state=initial,action)=>{ //this method hard to manage lot of proprerty
  
//     switch (action.type) {    // create multiple reducer function is much better
//         case Buy_Cake :
//         return{
//             ...state,noOfCake:state.noOfCake-1
//         }
//         case Buy_ICECREAM :
//             return{
//                 ...state,noOfICECREAM:state.noOfICECREAM-1
//             }
    
//         default:
//             return state
//     }

// }
const rootReducer=combaineReducer({
    cake:CAKEreducer,
    juice:JUICEreducer,
    icecream:ICECREAMreducer
})
const store=createStore(rootReducer)
console.log("initial state",store.getState())
 const unSubscribe= store.subscribe(()=>console.log('updated State', store.getState() ))
//  const unSubscribe= store.subscribe(()=>{})

// store.dispatch(buyCake())
// store.dispatch(buyICECREAM()) // it is not good
// store.dispatch(buyICECREAM())
// store.dispatch(buyICECREAM())
// store.dispatch(buyJUICE())
// store.dispatch(buyJUICE())
// store.dispatch(buyJUICE())

store.dispatch(buyCake())
unSubscribe()
store.dispatch(buyCake())
