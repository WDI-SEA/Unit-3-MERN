import React, { useState, createContext } from 'react';
import BatteryContainer from './components/BatteryContainer/BatteryContainer';
import BatteryHookContainer from './components/BatteryHookContainer/BatteryHookContainer';
import BatteryOne from './components/BatteryOne/BatteryOne';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({
    name: 'Alex',
    email: 'Alex@GA.com'
  })
  
  
  return (
    <>
    <UserContext.Provider value={user}>
      <BatteryOne />
    </UserContext.Provider>
      <BatteryContainer />
      <BatteryHookContainer />
    </>
  );
}

export default App;
