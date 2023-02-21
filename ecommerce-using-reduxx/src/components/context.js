
import React, { createContext,useContext, useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { detailProduct, storeProducts } from '../data';
import { fetchProducts, setProducts,addTotals,  } from '../redux/actions/productActions';

const ProductContext=createContext();

const ContextProvider = (props) => {
 const cartR=   useSelector((state)=>state.cart)
   const [cart, setcart] = useState([]);
    const [state, setstate] = useState({
        products:[],
        detailsProduct:detailProduct,
        modelOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
        
    });

 const dispatch =useDispatch()
//     useEffect(()=>{
        
//         dispatch(addTotals())
//     },[cartR])
    useEffect(()=>{
        
        dispatch(fetchProducts())
      
    },[])

    const setProducts1 =()=>{
        let tproducts=[];
        storeProducts.forEach(item=>{
            const singleProduct={...item};
            tproducts=[...tproducts,singleProduct]
        })
        setstate({
            ...state,products:tproducts
        })
    }
   
    const getItem=(id)=>{
      const product =state.products.find(item=>{
        return item.id===id
      })
      return product
    }
    const handleDetails=(id,inCart)=>{
        const product=getItem(id)

        if(!inCart){

            setstate({
                ...state,detailsProduct:product
            })
        }
    }
    const addToCart=(id)=>{
 
const tempProducts=[...state.products]
const index =tempProducts.indexOf(getItem(id));
const product=tempProducts[index];
product.inCart=true;
product.count=1;
const price=product.price;
product.total=price;

setcart([...cart,product])
setstate({
    ...state,products:tempProducts
})

 }


    const openModel=(id)=>{
    const product =getItem(id)
    console.log("it is open model function")
    setstate({
        ...state,modelOpen:true,modalProduct:product
    })

  
    }
    const closeModel=()=>{
        setstate({
            ...state,modelOpen:false
        })
    }
    const increment=(id)=>{
const updatedCart=cart.map(item=>{
    if(item.id===id){
        item.count=item.count+1;
        item.total=item.count*item.price
        return item
    }else{
        return item
    }

})
setcart([...updatedCart])
    }
    const decrement=(id)=>{
        const updatedCart=cart.map(item=>{
            if(item.id===id){
                item.count=item.count-1;
                item.total=item.count*item.price
                return item
            }else{
                return item
            }
        
        })
    const thatItem=updatedCart.filter((item)=>item.id===id)

        if(thatItem[0].count===0){
           removeItem(id)
            // const removeItem=cart.filter((item)=>item.id!==id)
            // setcart([...removeItem])
            // const remainProducts=state.products.map((product)=>{
            //     if(product.id===id){
            //         product.inCart=false;
            //         product.total=0;
            //         product.count=0;
            //        return product
            //       }else{
            //        return product
            //       }
            //    })
            //    setstate({
            //     ...state,products:remainProducts
            //    })
        }else{
            setcart([...updatedCart])
        }
     }
     const removeItem=(id)=>{
       const remainCart=cart.filter(item=> item.id!==id)
       const remainProducts=state.products.map((product)=>{
        if(product.id===id){
            product.inCart=false;
            product.total=0;
            product.count=0;
           return product
          }else{
           return product
          }
       })
       setstate({
        ...state,products:remainProducts
       })
       setcart([...remainCart])
     }
     const clearCart=()=>{
   
   const cleatCartItemFromProducts=state.products.map(product=>{
       if(product.inCart===true){
         product.inCart=false;
         product.total=0;
         product.count=0;
        return product
       }else{
        return product
       }
   })
   setcart([])
   setstate({
    ...state,products:cleatCartItemFromProducts
   })

     }
    //  const addTotals=()=>{
    //     let subTotal=0
    //     cart.map(item=>subTotal+=item.total);
    //     const tempTax=subTotal*0.1;
    //     const tax=parseFloat(tempTax.toFixed(2));
    //     const total=subTotal+tax;
    //     setstate({
    //         ...state,cartSubTotal:subTotal,
    //         cartTax:tax,
    //         cartTotal:total
    //     })
    //  }

  return (
   <ProductContext.Provider value={{...state,handleDetails:handleDetails,openModel:openModel,closeModel:closeModel,increment:increment,decrement:decrement,removeItem,removeItem,clearCart:clearCart,cart:cart}} >
    {props.children}
   </ProductContext.Provider>
  )
}
// const ContextConsumer=ProductContext.Consumer;
const ProductConsumer =()=>{
   return useContext(ProductContext);
}
export {ProductConsumer,ContextProvider}


