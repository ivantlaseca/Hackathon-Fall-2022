import './App.css';
import { useState } from 'react';
import PageContext from './PageContext';
import Settings from './Settings';
import Dryer from './Dryer';
import Washer from './Washer';
import Home from './Home';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [showWasher, setShowWasher] = useState(false);
  const [showDryer, setShowDryer] = useState(false);
  const [showHome, setShowHome] = useState(false);


  return (
    <main>
      <PageContext.Provider value={{
        showSettings,
        setShowSettings,
        showWasher,
        setShowWasher,
        showDryer,
        setShowDryer,
        showHome,
        setShowHome
      }}>
        {showSettings ? <Settings />
        : showDryer ? <Dryer /> 
        : showWasher ? <Washer />
        : <Home />} 
      </PageContext.Provider> 
    </main>
  );
}

export default App;
