import logo from './logo.svg';
import './App.css';
import  Pokemon from './ components/Pokemon/Pokemon'
import { useState } from 'react'

function App() {
  let [Power , setPower ] = useState({ 
    hp1:120,
    hp2:100,
    status:'Status:  '

  })

  let handleCharizardAttack =()=>{
    if (Power.hp2 > 0){
      {
        setPower({
        ...Power,
        hp2:(Power.hp2 -10),
        status: 'Status: Charizard is Attack Pikachu'
      })
      }
     
    }else{
      setPower ({...Power,
      status:'Status: Charizard can not Attack Pikachu'
      })
    }


  }

  let handlePikachuAttack =()=>{
    if (Power.hp1 > 0){
    setPower ({...Power,
    hp1:(Power.hp1 -10),
    status:('Status: Pikachu is Attack Charizard')
    })
    }else{
      setPower ({...Power,
      status:'Status: Pikachu can not Attack Pikachu'
      })
    }
  }



   
  return (
    <div className="App">

      <Pokemon name={'Charizard'}  hp={Power.hp1} img={'https://pokestop.io/img/pokemon/charizard-256x256.png'}Attack={handleCharizardAttack}/>
      <Pokemon name={'Pikachu'}  hp={Power.hp2} img={'https://pokestop.io/img/pokemon/pikachu-256x256.png'} Attack={handlePikachuAttack}/>
      <h4>{Power.status}</h4>

    </div>
  );
}

export default App;
