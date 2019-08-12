import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperSecret from './components/SuperSecret'
import OnOffButton from './components/OnOffButton'; 
import AccordianMenu from './components/AccordianMenu';

function App() {
  return (
    <div className="App">
      <SuperSecret isAuthenticated={true}/>
      <OnOffButton/>
      <AccordianMenu title="Aloha">
        
      </AccordianMenu>
    </div>
  );
}

export default App;
