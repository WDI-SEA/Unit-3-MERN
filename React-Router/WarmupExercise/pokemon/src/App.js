import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import { useState } from 'react'


function App() {

  
  const [state, setState] = useState({
    hp1: 150,
    hp2: 100,
    status: 'Fighters are ready...'
  })

  const handlePikachuAttack = () => {

    setState({
      ...state,
      hp1: (state.hp1-10),
      status: 'pikachu is attacking charizard'
    })
  }

  const handleCharizardAttack = () => {

    setState({
      ...state,
      hp2: (state.hp2-10),
      status: 'charizard is attacking pikachu'
    })
  }

  return (
    <div style={{ display: 'block', width: '100%'}}>
        <h1 style={{textAlign: 'center'}}>Pokemon Game</h1>

        <Pokemon name={'Charizard'} image={'https://pokestop.io/img/pokemon/charizard-256x256.png'} hp={state.hp1} func={handleCharizardAttack} />
        <Pokemon name={'Pikachu'} image={'https://pokestop.io/img/pokemon/pikachu-256x256.png'} hp={state.hp2} func={handlePikachuAttack} />

        <h1>Status: {state.status}</h1>
    </div>
  );
}

export default App;
