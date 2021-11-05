import { Link } from 'react-router-dom';

function Header () {


return (
    <>
    <div className="header"></div><br>
    </br><div className="avengers">
            <h1>MULTIVERSE AVENGERS</h1>
        </div><div className="links">
            <Link to="/"><h2>HOME</h2></Link>
            <Link to="./MyTeam.js"><h2>MY TEAM</h2></Link>
        </div>
        </>
)
}
export default Header