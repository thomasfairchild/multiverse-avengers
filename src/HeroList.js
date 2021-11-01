import React from 'react';

const HeroList = ({heroList=[]}) => {

  return (
    <>
    { heroList.map((data) => {
      if (data) {
        return (
          <div key={data.name}>
          <img src={data.image.url} alt="superhero pic" />
          <h1>{data.name}</h1>
          <span style={{ color:'gray', marginBottom: 5 }}>{data.biography['']}</span>
        <div className="stats">
          <div>strength: {data.powerstats.strength['']}</div>
          <div>speed: {data.powerstats.speed['']}</div>
          <div>power: {data.powerstats.power['']}</div>
          </div>
          </div>
        )
      }
      return null
  })}
  </>
  )
}

export default HeroList