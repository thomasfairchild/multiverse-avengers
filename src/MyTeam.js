import Footer from './Footer';
import { Link, Route } from "react-router-dom";

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
            <br>
            </br>
        <div className="HeroSelect">
            {props.team.length > 0 ? myTeamHtml:null}
        </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <h1>NOW THAT YOUR TEAM HAS BEEN ASSEMBLED,

                ARE YOU READY TO FACE YOUR GREATEST CHALLENGE?
            </h1>
            
            <Link to="./Footer.js"><button onClick={() => alert('NEW CHALLENGERS HAVE ARRIVED')}>FIGHT!</button> </Link>

        </div>
    )
}

export default MyTeam