import './App.css';
import { useState } from 'react'
import Pokemon from './components/Pokemon';

function App() {

  const [state, setState] = useState({
    hp1: 120,
    hp2: 100,
    status: " "
  })


  const handleCharizardAttack = () =>{
    setState({ ...state, 
      hp2: (state.hp2 - 10),
      status: "Pikachu is attacking Charizard"
    })

    
   }
  
   const handlePikachuAttack = () =>{
      setState({ ...state, 
      hp1: (state.hp1 - 10),
      status: "Charizard is attacking Pikachu"
    })
   }

  return (
    <div className="App">
      <Pokemon name={"Pikachu"} hp={state.hp1} img={'https://pokestop.io/img/pokemon/pikachu-256x256.png'} attack={handleCharizardAttack} />
      <Pokemon name={"Charizard"} hp={state.hp2} img={'https://pokestop.io/img/pokemon/charizard-256x256.png'} attack={handlePikachuAttack} />
     
      <h4>{state.status}</h4>
    </div>
  );
}

export default App;
