import React from 'react';

function MyTeam(props) {

let myTeamHtml = '';
if(props.team[0]){
    myTeamHtml = props.team.map((heroList) => {
        return <div>
                <img src={heroList.image.url} alt="superhero pic" />
                <h1>{heroList.name}</h1>
                <button onClick={() => heroList.addHeroToTeam(myTeamHtml)}>Add to Team</button>
            </div>
    })
}
    return (
        <div className="TheTeam">
            <h1>My Team</h1>
            <p>Assemble!</p>
            {myTeamHtml}
        </div>
    )
}

export default MyTeam