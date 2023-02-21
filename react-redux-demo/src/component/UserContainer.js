import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../redux/index'

 function UserContainer({userdata,dispatcher}) {
useEffect(()=>{
// dispatcher()
},[])
    return      userdata.loading?(<h1>loading..</h1>):userdata.error?(<h1>{userdata.error}</h1>):(<div>
            <h1>user list</h1>
            <div>
           { userdata.data&&userdata.data.map(user => <p>{user.name}</p> )}
            </div>
          
          
            </div>)
           
        
    
  
}
// const apiFunction=(dispatch)=>{
//     dispatch(fetchUserRequest())
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{
//         const users=response.data
// dispatch(fetchUserSuccess(users))
//     })
//     .catch((error)=>{
//         console.log(error)
//         dispatch(fetchUserFailiure(error.message))
//     })
// }
const mapStateToProps=(state)=>{
return{
    userdata:state.user
}
}
const mapDispatchToProps=(dispatch)=>{
 return{
    dispatcher:()=>dispatch(fetchUser())
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)