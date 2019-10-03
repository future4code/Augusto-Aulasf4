import React from 'react';
import './App.css';

let clique = 0

function soma(clique){  
    clique++
  }

function App() {

  
  return (
    <div className="App">
      <h1>{cliqueAtual} cliques</h1>
      <button onClick={soma}>Clica</button>
    </div>
  );
}

export default App;
