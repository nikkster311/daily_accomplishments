import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boxes from "./boxes";

function App() {
  return (
    <div className="App">
      <header className="App-header">Daily Accomplishments</header>
        <h4>What have you accomlished today?</h4>
        <Boxes/>

    </div>
  );
}

export default App;
