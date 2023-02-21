import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const cart   =useSelector(state=>state.cart)
 const navigate= useNavigate()
const functionToCart=(path)=>{
  navigate(path)
}
  return (
    <div className='ui fixed menu'>
        <div className='ui container center navBar ' >
            <div onClick={()=>functionToCart("/")}><i class="fa-solid fa-house home "></i></div>
            <h2 className='name' >Redux-Demo-Shop</h2>
            <div id='cart1' onClick={()=>functionToCart("/cart")} ><i className="fa-solid fa-cart-shopping cart "><div className='cartCount' ><span className="cartNumber" >{cart.length}</span></div></i></div>
        </div>
    </div>
  )
}
