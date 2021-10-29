import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

// const api = () => {
//   fetch('https://superheroapi.com/api/10158049149961360/search/Batman')
//   .then((res) => res.json())
//   .then((data) => {
//   console.log("Hello",data)
//   })
// }

// useEffect(() => {
//   api();
// },[])

  // const makeAPICall = () => {
  //   fetch('https://superheroapi.com/api/10158049149961360/character-id')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(makeAPICall,data)
  //   })
  // };

  // useEffect(() => {
  //   makeAPICall();
  // }, [])


  //   const makeAPICall = () => {
  //   fetch('https://comicvine.gamespot.com/api/26f0548871a11f270ce38fe8390dd11eb894f55e/characters')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("Hello world",data)
  //   })
  // };

  // useEffect(() => {
  //   makeAPICall();
  // }, [])

  // const findHeroes = () => {
  //   fetch(`https://www.superheroapi.com/api.php/10158049149961360/search/`);
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("Hello world",data)
  //   })
  // };

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


// 3d9f39c9bf398de12912bd11a3976fa9

// const hash = "3d9f39c9bf398de12912bd11a3976fa9"

// useEffect(() => {


// `http://gateway.marvel.com/v1/public/characters/ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150`

// }
  return (
    <div className="App">
      <h1>Multiverse Avengers: ASSEMBLE!</h1>
    </div>
  );
}

export default App;
