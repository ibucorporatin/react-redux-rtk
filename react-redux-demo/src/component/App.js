import React from 'react'
import {Provider} from 'react-redux'
import store from '../redux/Store'
import CakeContainer from './CakeContainer'
import HooksCakeContainer from './HooksCakeContainer'
import IceCreamContainer from './IceCreamContainer'
import ItemContainer from './ItemContainer'
import NewCakeContainer from './NewCakeContainer'
import UserContainer from './UserContainer'


export default function () {
  return (
   <Provider store={store} >
     <div>
      <UserContainer/>
      <ItemContainer cake />
      <ItemContainer  />
      <IceCreamContainer/>
      <HooksCakeContainer/>
      <CakeContainer  />
      <NewCakeContainer/>
      </div>
   </Provider>
  )
}
