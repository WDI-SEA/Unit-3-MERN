import React from 'react';
import './App.css';
import { useState } from 'react'
import Reciept from './components/Reciept/Reciept';

function App() {

  const [receipts, setReceipts] = useState([

    {
      id: 1,
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
        drink: 'Korchata',
        cost: 22,
      },
      paid: false,
    },
    {
      id: 2,
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
        drink: 'Korchata',
        cost: 19,
      },
      paid: false,
    },
    {
      id: 3,
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20,
      },
      paid: false,
    },
    
  ])

  const [newReciept, setNewReciept] = useState(
    {person: '', order: {}}
  ) 
  
  return (
    <>
    
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main>

{receipts.map((s,i) => 
  <Reciept 
  key={i}
  name={s.person}
  main={s.order.main}
  protein={s.order.protein}
  rice={s.order.rice}
  sauce={s.order.sauce}
  drink={s.order.drink}
  cost={s.order.cost}
  />

)}  

      </main>
    </>
  );
}

export default App;
