import React, { useState } from 'react';
import MyTeam from './MyTeam';

const HeroList = ({heroList}) => {
  console.log(heroList)
  
  const [teamList, setTeamList] = useState([]);

  return (
    <>
    {heroList ? heroList.map((data) => {
      console.log(data)
      if (data) {
      console.log(heroList)

      // let myTeamHtml = "";
      // if(props.team[0]){
      //   myTeamHtml = props.team.map((heroList) => {
      //   return <div>
      //           <img src={heroList.image.url} alt="superhero pic" />
      //           <h1>{heroList.name}</h1>
      //           <button onClick={() => props.addHeroToTeam(myTeamHtml)}>Add to Team</button>
      //       </div>
      //   })}
      
      

    return (
          <div >
            <br>
            </br>
        <div className="profile">
          <img src={data.image.url} alt="superhero pic" />
          <h1>{data.name}</h1>
          <div>Alter Ego: {data.biography["full-name"]}</div>
          <br>
          </br>
          <div>Race: {data.appearance["race"]}</div>
          <div>Gender: {data.appearance["gender"]}</div>
          <div>Height: {data.appearance["height"][0]} ft.</div>
          <div>Weight: {data.appearance["weight"][0]}</div>
          <div>Mass: {data.appearance["weight"][1]}</div>
          <br>
          </br>
          <h3>Aliases</h3>
          <div>{data.biography.aliases[0]}</div>
          <div>{data.biography.aliases[1]}</div>
          <div>{data.biography.aliases[2]}</div>
          <div>{data.biography.aliases[3]}</div>
          <div>{data.biography.aliases[4]}</div>
          <div>{data.biography.aliases[5]}</div>
          <br>
          </br>
        </div>

        <h3>Connections</h3>
          <div>Group-Affiliations: {data.connections["group-affiliation"]}</div>
          <br>
          </br>
          <div>Relatives: {data.connections["relatives"]}</div>
          <br>
          </br>

          <h3>Work</h3>
          <div>Base of Operations: {data.work["base"]}</div>
          <br>
          </br>
          <div>Purpose: {data.work["occupation"]}</div>
          <br>
          </br>

        <div className="stats">
          <h3>Power Stats</h3>
          <div>Strength: {data.powerstats.strength}</div>
          <div>Combat: {data.powerstats.combat}</div>
          <div>Intelligence: {data.powerstats.intelligence}</div>
          <div>Durability: {data.powerstats.durability}</div>
          <div>Speed: {data.powerstats.speed}</div>
          <div>Power: {data.powerstats.power}</div>
          </div>
          <br>
          </br>
          <br>
          </br>
          <div className="button">
          {/* <div style={{display: 'flex'}}>{myTeamHtml}</div> */}
          {/* <MyTeam /> */}
          <br>
          </br>
          <br>
          </br>
          </div>
          </div>
        
    )
      }
    }): <div>Sorry, it appears that character is missing in action!</div>}
  </>
  )
}

export default HeroList