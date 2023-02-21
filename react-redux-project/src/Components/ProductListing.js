import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import ProductComponent from './ProductComponent'
import { fetchProducts } from '../redux/actions/ProductActios'

export default function ProductListing() {
    // const product=useSelector((state)=>state)
    const dispatch=useDispatch()
    
  
    useEffect(()=>{
    dispatch(fetchProducts())
    },[])
  
  return (
    <div className='ui grid container  ' id='productList' >
<ProductComponent/>
    </div>
  )
}
