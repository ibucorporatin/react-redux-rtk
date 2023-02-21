import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
   const cakes= useSelector((state)=>state.cake.numOfCakes)
   const dispatch=useDispatch()
//    console.log(cakes)
  return (
    <div>
        <h3>number of cakes - {cakes}</h3>
        <button onClick={()=>dispatch(ordered())} >order cake</button>
        <button onClick={()=>dispatch(restocked(5))} >restore cake</button>
    </div>
  )
}

export default CakeView