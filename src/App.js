import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperSecret from './components/SuperSecret'
import OnOffButton from './components/OnOffButton'; 

function App() {
  return (
    <div className="App">
      <SuperSecret isAuthenticated={true}/>
      <OnOffButton/>
    </div>
  );
}

export default App;
