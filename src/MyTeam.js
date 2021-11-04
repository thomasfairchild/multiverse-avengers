import React, { Component } from 'react';
import missionData from './missionData';

function MyTeam(props) {

let myTeamHtml = props.team.map((hero) => {

        return (
        <div>
                <img src={hero.image.url} alt="superhero pic" />
                <h1>{hero.name}</h1>
                <button onClick={() => props.removeHeroFromTeam(hero.id)}>Remove from Team</button>
            </div>
)
    })
console.log(props.team)

    return (
        <div className="TheTeam">
            <h1>MY TEAM</h1>
            <p>Assemble!</p>
            <br>
            </br>
        <div className="HeroSelect">
            {props.team.length > 0 ? myTeamHtml:null}
        </div>    
            <br>
            </br>
            <br>
            </br>
            {/* <h2>ACTIVATE MISSION</h2> */}

        </div>
    )
}

export default MyTeam