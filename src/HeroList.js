import React, { useState } from 'react';

const HeroList = (props) => {
  console.log("Notice me",props)

  // const [heroList, setHeroList] = useState(props);
  return (
    <>
    {/* {heroList.map((data) => {
      console.log("HELLO",data)
      if (data.results[0]) {
      console.log("Hero to Zero",heroList)  
        return (
          <div>
          <img src={data.image.url} alt="superhero pic" />
          <h3>Name: {data.results.name['']}</h3>
          <span style={{ color:'gray', marginBottom: 5 }}>{data.biography['']}</span>
        <div className="stats">
          <div><p>strength: {data.powerstats.strength['']}</p></div>
          <div>speed: {data.powerstats.speed['']}</div>
          <div>power: {data.powerstats.power['']}</div>
          </div>
          </div>
        )
      }
  })} */}
  </>
  )
}

export default HeroList