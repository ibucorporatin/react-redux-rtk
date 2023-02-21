import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

 function ItemContainer(props) {
  return (
    <div>
        <h1>
            item -{props.count}
        </h1>
        <br/>
        <button onClick={props.buyItem} >buy item</button>
    </div>
  )
}
const mapStateToProps=(state,ownProps)=>{
    const whichCount=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCream
    return{
    count:whichCount
 
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
const dispatchItem=ownProps.cake?buyCake:buyIceCream
return{
  buyItem:()=>dispatch(dispatchItem())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)