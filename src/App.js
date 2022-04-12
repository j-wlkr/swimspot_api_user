import React from 'react';
import './App.css';
import SpotList from './Spot/SpotList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SwimSpot</h1>
        <SpotList />
      </header>
    </div>
  );
}

export default App;
