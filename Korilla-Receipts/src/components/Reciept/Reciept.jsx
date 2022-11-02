import React from 'react'
import './Reciept.css'

function Reciept(props) {
    return (

        
  <div className="column">
  <h3>{props.name}</h3>
<ul>
  <li><h3> Main:{props.main}</h3></li>
  <li><h3> Protein:{props.protein}</h3></li>
  <li><h3> Rice:{props.rice}</h3></li>
  <li><h3> Sauce:{props.sauce}</h3></li>
  <li><h3> Drink:{props.drink}</h3></li>
  <li> <h3> Cost:{props.cost}</h3></li>
</ul>
  </div>

   
          )
}

export default Reciept