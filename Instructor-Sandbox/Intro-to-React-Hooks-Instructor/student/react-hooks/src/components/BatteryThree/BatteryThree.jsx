import React, {useContext} from 'react'
import { UserContext } from '../../App'

function BatteryThree() {

    const user = useContext(UserContext)
    console.log('This is the context data! ', user)
  
  return (
    <div>BatteryThree</div>
  )
}

export default BatteryThree