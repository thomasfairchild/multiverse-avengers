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

    const addHeroToTeam = (id) => {
      const hero = heroList.find(ultra => ultra.id === id)
      if(teamList.length === 5){
  
      }
  
      setTeamList([...teamList, hero])
    }

    const removeHeroFromTeam = (id) => {
      const newTeamList = teamList.filter(ultra => ultra.id !== id)

      setTeamList(newTeamList)
    }


console.log(heroList)
  return (
    <div className="App">
      <h1>Multiverse Avengers</h1>
      <div className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="./MyTeam.js">MY TEAM</Link>
      </div>
      <br>
      </br>
      <Route exact path="/">
      <SearchPage searchText={searchText} updateInput={updateInput} handleChange={handleChange}/>
      <br>
      </br>
        <h3>Call forth your warrior and they will appear, ready for battle!</h3>
        <br>
        </br>
        <HeroList heroList={heroList} addHeroToTeam={addHeroToTeam} />
       </Route> 

      <Route exact path="/MyTeam.js" component={MyTeam}>
      <MyTeam team={teamList} removeHeroFromTeam={removeHeroFromTeam}/>
      </Route>
    </div>
  );
}

// We need: App <==== Header <==== Nav <===== Search, AllHeroes (the roster), 
// Team <==== Mission (<== MissionData) and Face-Off (<=== FaceOffData)
// 10 Components

export default App;
