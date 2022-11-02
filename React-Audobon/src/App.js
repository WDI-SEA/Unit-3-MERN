import React from 'react';
import Birds from './components/Birds/Birds';
import { Route, Routes } from 'react-router-dom'
import BirdDetails from './components/BirdDetails/BirdDetails';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Birds />} />
          <Route path='/details/:birdID' element={<BirdDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
