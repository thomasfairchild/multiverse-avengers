import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

    const findHero = () => {
    fetch(`https://www.superheroapi.com/api.php/10158049149961360/502`)
    .then((res) => res.json())
    .then((data) => {
      console.log("up in the sky!",data)
    })
  };

  useEffect(() => {
    findHero();
  }, [])

  return (
    <div className="App">
      <h1>Multiverse Avengers: ASSEMBLE!</h1>
    </div>
  );
}

export default App;
