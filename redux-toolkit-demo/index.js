const store=require("./app/store")
const { fetchUsers } = require("./feautures/user/userSlice")
const iceCreamAction = require("./feautures/iceCream/iceCreamSlice").iceCreamAction
const cakeAction=require("./feautures/cake/cakeSlice").cakeAction

console.log("initial state",store.getState())
const unSubscribe=store.subscribe(()=>{
    console.log("updated state",store.getState())
})
// store.dispatch(cakeAction.ordered()) 
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.restocked(3))
// unSubscribe()

store.dispatch(fetchUsers())