import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView = () => {
    const iceCreams= useSelector((state)=>state.iceCream.iceCream)
    const dispatch=useDispatch()
  return (
    <div>
    <h3>number of iceCreams - {iceCreams}</h3>
    <button  onClick={()=>dispatch(ordered())} >order iceCream</button>
    <button  onClick={()=>dispatch(restocked(20))} >restore iceCream</button>
</div>
  )
}

export default IceCreamView