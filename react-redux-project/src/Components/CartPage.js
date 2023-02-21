import React from 'react'
import { useSelector } from 'react-redux'
import AddedProducts from './AddedProducts'

const CartPage = () => {
    const cart   =useSelector(state=>state.cart)
    let a=0;
  if(cart.length>0){
    let totel =cart.reduce((p,n)=>{
        return a+=n.price
    })
  }
    // console.log(a)

    return       (cart.length===0)?(<h1 className='emptyCart' >cart is empty</h1>):(<div className='tableContainer' >
  <table  className='CartContainer'>
<thead>
<tr>
<th>photo</th>
<th>name</th>
<th>qty</th>
<th>price</th>
</tr>
</thead>
     
 <tbody>
 {cart.map((product)=>{
return  <AddedProducts key={product.id} product={product} />
  })}
  <tr>
  <td colspan="3" > <div><h1>Total</h1></div></td>
 
  <td> <div>{a}</div></td>
   
   

  </tr>
 </tbody>

</table>

</div>)}
  


export default CartPage