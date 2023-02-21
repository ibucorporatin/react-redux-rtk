import React,{useEffect} from 'react'
import { useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, removeSelectedProduct,  } from '../redux/actions/ProductActios'

export default function ProductDetails() {
  const {productid}=useParams()
  const product=useSelector((state)=>state.product)
  // console.log(product)
  const {id, title,images,price,category,description}=product
  const dispatch=useDispatch()


  useEffect(()=>{
   if(productid&&productid!=="") dispatch(fetchProduct(productid))
  return ()=>{
    dispatch(removeSelectedProduct())
  }
  },[productid])
  return (
    <div style={{marginTop:"200px"}}>
      {Object.keys(product).length===0 ?(<h1>loading...</h1>):(
    <div className="item">      
    <div className="ui small image">
      <img src={images[0]}/>
    </div>
    <div className="content">
      <div className="header">{title}</div>
      <div className="meta">
        <span className="price">${price}</span>
        <span className="stay">{category}</span>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  </div>)}
  </div>
  )
}
