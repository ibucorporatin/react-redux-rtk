import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'


 function CakeContainer(props) {
  return (
    <div>
        <h2>No of cakes {props.numOFCake} </h2>
        <br/>
        <button onClick={props.buyCake} >buy cakes</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    numOFCake:state.cake.numOfCakes,

  }
}
const mapDispatchToProps=(dispatch)=>{
return{
  buyCake:()=>dispatch(buyCake())
}
} 

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)