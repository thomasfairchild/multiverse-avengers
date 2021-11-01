import './App.css';
import SearchPage from './SearchPage';
import React, { useState, useEffect } from 'react';

function App(props) {

  const [heroList, setHeroList] = useState('');
  const [input, setInput] = useState('');
  const [heroListDefault, setHeroListDefault] = useState();
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  const findHero = async () => {
    return await fetch(`https://www.superheroapi.com/api.php/10158049149961360/search/${searchText}`)
    .then(response => response.json())
    .then(data => {
        setHeroList(data)
        setHeroListDefault(data)
        console.log("Superman!",data)
    })
}

  const updateInput = (input) => {
      const filtered = heroListDefault.filter(data => {
          return data.name.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input);
      setHeroList(filtered);
    }

function handleChange (e) {
        const searchTerm = e.target.value;
        
        setSearchText(searchTerm);
        if (searchTerm.length === 0) {
          setSuperheroData([]);
        }
        if (searchTerm.length > 3) {
          findHero();
        }
    }

useEffect( () => {findHero()},[props.data]);

  return (
    <div className="App">
      <h1>Multiverse Avengers: ASSEMBLE!</h1>
      <SearchPage searchText={searchText} handleChange={handleChange}/>
    </div>
  );
}

// We need: App <==== Header <==== Nav <===== Search, AllHeroes (the roster), 
// Team <==== Mission (<== MissionData) and Face-Off (<=== FaceOffData)
// 10 Components

export default App;
