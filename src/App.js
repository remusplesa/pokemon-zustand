import React from "react";

import NavBar from "./components/NavBar";
import Pokemons from './components/Pokemons';
import CompareModal from './components/CompareModal';


function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <h1>React + Zustand + Bootstrap</h1>
        <p>Query the pokemons!</p>
      </div>
      <NavBar />
      <CompareModal />

      <Pokemons />
    </div>
  );
}

export default App;
