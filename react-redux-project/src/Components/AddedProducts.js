import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProductsIntoCarts } from '../redux/actions/ProductActios';

const AddedProducts = ({product}) => {
   const dispatch= useDispatch()
   const cart   =useSelector(state=>state.cart)

    const [qty, setqty] = useState(1);
    const perfomQty=(operatio)=>{
            if(operatio=="+")  {
                setqty((p)=>p+1)

            }else if(operatio=="-"){
                
               qty!=1&& setqty((p)=>p-1)
            }
    }
    useEffect(() => {
        const updatedCart=cart.map((product1)=>{
         return   (product.id==product1.id)?{...product1,qty:qty}: product1
        })
        // console.log(updatedCart)
    //   dispatch(updateProductsIntoCarts(updatedCart))
    }, [qty]);
  return (
    <tr>
   
        <td>
            <div><img className='cartimage' src={product.images[0]}  /></div>
            </td>


            <td>
        <div>
            <span>{product.title}</span>
            <span>{product.category}</span>
        </div>
            </td>
          <td  >
           <div style={{ textAlign:"center"}}>
            <span className='qtyButon' onClick={()=>perfomQty("-")} ><i className="fa-solid fa-minus"></i></span>
            <span className='qtyButon' >{qty}</span>
            <span className='qtyButon' onClick={()=>perfomQty("+")} ><i className="fa-solid fa-plus"></i></span>
           </div>
          </td>
            <td>    
        <div>
            {(product.qty?(product.price)(product.qty):product.price)}$
        </div>
            </td>
    {/* </div> */}
    </tr>
  )
}

export default AddedProducts