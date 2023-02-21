import { BUY_CAKE } from "./CakeTypes"
 
export const buyCake =(count=1)=>{
    return{
        type:BUY_CAKE,
        payload:count
    }
}