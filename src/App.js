import './App.css';
import SearchPage from './SearchPage';
import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import HeroList from './HeroList';


function App(props) {

  const [heroList, setHeroList] = useState([]);
  const [input, setInput] = useState('');
  const [heroListDefault, setHeroListDefault] = useState();
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  const findHero = async () => {
    return await fetch(`https://www.superheroapi.com/api.php/10158049149961360/search/${searchText}`)
    .then(response => response.json())
    .then(data => {
        setHeroList(data.results)
        setHeroListDefault(data.results)
        setSuperheroData(data)
        console.log("Finding Hero",data.results)
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

// useEffect( () => {findHero()},[]);


console.log(heroList)
  return (
    <div className="App">
      <h1>Multiverse Avengers: ASSEMBLE!</h1>
      <SearchPage searchText={searchText} updateInput={updateInput} handleChange={handleChange}/>
        <h2>The Heroes</h2>
      {/* <SearchResults heroList={heroList} /> */}
      <HeroList heroList={heroList} />
    </div>
  );
}

// We need: App <==== Header <==== Nav <===== Search, AllHeroes (the roster), 
// Team <==== Mission (<== MissionData) and Face-Off (<=== FaceOffData)
// 10 Components

export default App;
