import React, {useState} from 'react'
import { useEffect } from 'react'
import Battery from '../Battery/Battery'
import {register, unregister} from '../../utils/battery'

function BatteryHookContainer() {

    const [batteryData, setBatteryData] = useState({
        level: .55,
        charging: true
    })
    const updateBattery = ({level, charging}) => {
        setBatteryData({level, charging})
    }
    useEffect(() => {
        register(updateBattery)

        //Unmounting method in the return
        return () => {
            unregister(updateBattery)
        }
    }, [])

    const chargeBattery = () => {
        setBatteryData({
            ...batteryData,
            level: batteryData.level + 0.01
        })
    }
  return (
    <>
        <Battery 
        level={batteryData.level} 
        charging={batteryData.charging}
        /> 
        {/* <button onClick={chargeBattery} >
            Charge battery!
        </button> */}
    </>
  )
}
export default BatteryHookContainer