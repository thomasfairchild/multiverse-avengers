import './App.css';
import SearchPage from './SearchPage';
import React, { useState } from 'react';
import HeroList from './HeroList';
import MyTeam from './MyTeam';
import { Link, Route } from "react-router-dom";
import Header from './Header'
import Mission from './Mission';


function App() {

  const [heroList, setHeroList] = useState([]);
  const [input, setInput] = useState('');
  const [heroListDefault, setHeroListDefault] = useState();
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);
  const [teamList, setTeamList] = useState([]);

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

    const addHeroToTeam = (teamList) => {
      console.log('addHeroToTeam is ',addHeroToTeam);
      if(teamList.length === 5){
  
      }
  
      setTeamList([...teamList, heroList])
    }


console.log(heroList)
  return (
    <div className="App">
      <h1>Multiverse Avengers</h1>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="./MyTeam.js">My Team</Link>
        <Link to="./Mission.js"> Mission</Link>
      </div>
      <br>
      </br>
      <Route exact path="/">
      <SearchPage searchText={searchText} updateInput={updateInput} handleChange={handleChange}/>
      <br>
      </br>
        <h1>The Roster</h1>
        <p>Call forth your warrior and they will appear below, ready for battle!</p>
        <br>
        </br>
        <HeroList heroList={heroList} addHeroToTeam={addHeroToTeam} />
       </Route> 

      <MyTeam team={teamList}/>


      {/* <Route exact path="./Mission.js"> */}
        <Mission/>
      {/* </Route> */}
    </div>
  );
}

// We need: App <==== Header <==== Nav <===== Search, AllHeroes (the roster), 
// Team <==== Mission (<== MissionData) and Face-Off (<=== FaceOffData)
// 10 Components

export default App;
