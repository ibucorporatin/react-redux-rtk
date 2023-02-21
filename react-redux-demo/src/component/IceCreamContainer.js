import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'



 function IceCreamContainer(props) {
    console.log("iceCream container re render")
  return (
    <div>
        <h2>No of iceCream {props.numOfIceCream} </h2>
        <br/>
        <button onClick={props.buyIceCream} >buy iceCream</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    numOfIceCream:state.iceCream.numOfIceCream
  }
}
const mapDispatchToProps=(dispatch)=>{
return{
    buyIceCream:()=>dispatch(buyIceCream())
}
} 

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)