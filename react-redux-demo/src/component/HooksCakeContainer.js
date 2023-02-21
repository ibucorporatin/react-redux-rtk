import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'

export default function HooksCakeContainer() {
    const numOFCake=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
    <h2>No of cakes {numOFCake} </h2>
    <br/>
    <button onClick={()=>dispatch(buyCake())} >buy cakes</button>
</div>
  )
}
