import React, { useRef, useState,useEffect } from 'react'
import {Link ,useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { addProductsIntoCarts } from '../redux/actions/ProductActios'

export default function ProductComponent() {
//   const store= useRef(null)
//     const [isExist, setisExist] = useState(null);
 
    const cart   =useSelector(state=>state.cart)
    const navigation=useNavigate()
  const dispatch=useDispatch()
    const {products}=useSelector((state)=>state.allProducts)
    const addToCart =(e,product2)=>{
        e.stopPropagation()
        if(cart.length>0){
            let filt =cart.filter((product1)=>{
                return product1.id ==product2.id
            })
        //  setisExist(filt)
            
            filt.length===0&&  dispatch(addProductsIntoCarts(product2))

            
        }else if(cart.length==0){
            dispatch(addProductsIntoCarts(product2))
        }
        
  
    
    }

    const showDetails=(id)=>{
        navigation(`/product/${id}`)
    }
    const func=(product2)=>{
        let filt =cart.filter((product1)=>{
            return product1.id ==product2.id
        })
        if(filt.length>0){
            return "alreadyExist"
        }else{
            return ""
        }
    }
    // useEffect(() => {
    //     let filt =cart.filter((product1)=>{
    //         return product1.id ==store.current.id
    //     })
    //     filt.length>0&&setisExist(filt)
     
    // }, []);
    // console.log(isExist)
   const renderList=products.map((product)=>{
    // store.current=product
    const {id, title,images,price,category}=product
    return(<div className="four wide column" key={id}>
        {/* <Link to={`/product/${id}`} > */}
        <div className='ui link cards' onClick={()=>showDetails(id)} >
            <div className='card'>
                <div className="image" style={{width:"200px",height:"300px"}}>
                    <img src={images[0]} alt={title} style={{width:"100%",height:"100%"}}/>
                </div>
                <div id='productDescription'  >
                <div className='content details'>
                    <div className='header'>{title}</div>
                    <div className='meta price'>$ {price}</div>
                    <div className='meta'>{category}</div>
                </div  >
                <i onClick={(e)=>addToCart(e,product)} className={`fa-solid fa-cart-plus addToCart ${func(product)} `}></i>
                </div>
               
            </div>
        </div>
        {/* </Link> */}
    </div>)
   })

 return (   
<>{renderList}</>
  )
}
