import React,{useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'


 function NewCakeContainer(props) {
    const [cakeCount, setcakeCount] = useState(1);
  return (
    <div>
        <h2>No of cakes {props.numOFCake} </h2>
        <input type="number" value={cakeCount} onChange={(e)=>setcakeCount(e.target.value)} />
        <br/>
        <button onClick={()=>props.buyCake(cakeCount)} >buy cakes</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    numOFCake:state.cake.numOfCakes
  }
}
const mapDispatchToProps=(dispatch)=>{
return{
  buyCake:(count)=>dispatch(buyCake(count))
}
} 

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)