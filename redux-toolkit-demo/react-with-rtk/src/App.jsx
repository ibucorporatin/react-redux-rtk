import React from 'react'
import CakeView from './feautures/cake/cakeView'
import IceCreamView from './feautures/iceCream/iceCreamView'
import UserView from './feautures/user/userView'

const App = () => {
  return (
    <div>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App