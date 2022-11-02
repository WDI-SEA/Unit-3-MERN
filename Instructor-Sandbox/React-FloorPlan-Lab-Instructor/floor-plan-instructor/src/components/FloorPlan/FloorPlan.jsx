import React from 'react'
import Kitchen from '../Kitchen/Kitchen'
import LivingRoom from '../LivingRoom/LivingRoom'
import Bedroom from '../Bedroom/Bedroom'
import Bath from '../Bath/Bath'

function FloorPlan() {
  return (
    <div>
        <Kitchen />
        <LivingRoom />
        {[1,2,3].map(num => 
            <Bedroom bedNum={num} />
        )}
{/* 
        <Bedroom bedNum={1} />    
        <Bedroom bedNum={2} />    
        <Bedroom bedNum={3} /> */}
        <Bath size={'Half'} />    
        <Bath size={'Full'} />            
    </div>
  )
}

export default FloorPlan