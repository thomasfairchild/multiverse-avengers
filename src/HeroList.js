import React, { useState } from 'react';

const HeroList = ({heroList}) => {
  console.log("Notice me",heroList)

  // const [heroList, setHeroList] = useState(props);
  return (
    <>
    {heroList ? heroList.map((data) => {
      console.log("HELLO",data)
      if (data) {
      console.log("Hero to Zero",heroList)  
        return (
          <div>
          <img src={data.image.url} alt="superhero pic" />
          <h3>Name: {data.name}</h3>
          
          <div className="bio">
            <div>Biography: </div>
            <br>
            </br>
          </div>
          {/* <span style={{ color:'gray', marginBottom: 5 }}>{data.biography}</span> */}
        
        <div className="stats">
          <div>Strength: {data.powerstats.strength}</div>
          <div>Combat: {data.powerstats.combat}</div>
          <div>Intelligence: {data.powerstats.intelligence}</div>
          <div>Durability: {data.powerstats.durability}</div>
          <div>Speed: {data.powerstats.speed}</div>
          <div>Power: {data.powerstats.power}</div>
          </div>

          </div>
        )
      }
  }): <div>No results found</div>}
  </>
  )
}

export default HeroList