import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon/pokemon';
import {useState} from 'react'

function App() {

 let [state, setState] = useState({

  pokemonName : ['charizard', 'pikachu'],
  hp : ['120', '100'],
  img : ['https://pokestop.io/img/pokemon/pikachu-256x256.png', 'https://pokestop.io/img/pokemon/charizard-256x256.png']
})

return (
  <div className="App">
      <Pokemon name={state.pokemonName[0]} hp={state.hp[0]} img={state.img[1]} />
      <Pokemon name={state.pokemonName[1]} hp={state.hp[1]} img={state.img[0]}/>
    </div>
  );
  
}
  export default App;


// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {



//     return (
//       <div>App</div>
//     )
//   }
// }
