function MyTeam(props) {

let myTeamHtml = props.team.map((hero) => {

        return (
            <div>
                <img src={hero.image.url} alt="superhero pic" />
                    <h1>{hero.name}</h1>
                <button onClick={() => props.removeHeroFromTeam(hero.id)}>REMOVE FROM TEAM</button>
            </div>
)
    })
console.log(props.team)

    return (
        <div className="TheTeam">
            <h1>MY TEAM</h1>
            <br>
            </br>
        <div className="HeroSelect">
            {props.team.length > 0 ? myTeamHtml:null}
        </div>
            <br>
            </br>
            <br>
            </br>
            <h1>ONCE YOUR TEAM HAS BEEN ASSEMBLED...</h1>
            <br>
            </br>
            <h1>AND YOU BELIEVE THEY'RE STRONG ENOUGH...</h1>
            <br>
            </br>
            <h1>CLICK ON THE BUTTON BELOW...</h1>
            <br>
            </br>
            <h1>TO FACE YOUR GREATEST CHALLENGE!</h1>
            <br>
            </br>
            <br>
            </br>
            <div className="container">
                    <div className="overlay">
                    <div className="villains"></div>
                    </div>   
            </div>
            <br>
            </br>
            <div className="thebutton">
             <button onClick={() => alert('NEW CHALLENGERS HAVE ARRIVED')}>FIGHT!</button>          
            </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </div>
    )
}

export default MyTeam