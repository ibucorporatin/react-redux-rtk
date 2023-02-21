import { BUY_ICE_CREAM } from "./IceCreamType"


const initialState={
    numOfIceCream:20
}

  const iceCreamReducer=(state=initialState,action)=>{
switch (action.type) {
    case BUY_ICE_CREAM :return{
        ...state,
        numOfIceCream: state. numOfIceCream-1
    }
    default:
       return state        
}
}

export default iceCreamReducer