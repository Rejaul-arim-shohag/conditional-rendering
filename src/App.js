import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './components/User/User';


function App() {
  const [familiar, setFamilar] =  useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Is Familiar : {familiar.toString()}</h2>
        <button onClick={()=>setFamilar(!familiar)}>Toggle</button>
        <User familiar={familiar}></User>
      </header>
    </div>
  );
}

export default App;
