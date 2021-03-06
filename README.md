# The Project

- [https://thomasfairchild.github.io/multiverse-avengers/#/]

# Project Overview

October 29th: Project was approved.

October 30th: 
- Went over class study guides and watched recorded sessions.
- Launched npx create-react-app, react-router, react-router-dom.
- Created the MPV Components (App, SearchPage, SearchBar, SearchResults, HeroList).
- Started writing code.

October 31st:
- Spent most of the day writing code.
- API setup was a success.
- First major problem: Unable to get an object array to show on page.

November 1st:
- Spent the entire day brainstorming how to solve the aforementioned problem.
- Problem hasn't been solved but progress was made.
- The API data is still successfully being transmitted; the data is there to access.

November 2nd:
- Problem has been solved!
- Characters as they appear (picture, name, info) show up on the page as intended.

November 3rd:
- The onClick function isn't working. Today's goal is to solve it in order to
be able to select characters and add them to your team.
- Thanks to incredible help from General Assembly's staff, the problem has been solved.
- I've begun creating a mission database that will consist of challenges for teams.
- CSS has begun.
- Successfully learned how to deploy React App onto GitHub Pages.

November 4th:
- Last day!
- Made dozens of revisions (image sizes, positions, etc.)
- Configured the Media settings.
- Worked on a big Photoshop file.
- There are a few hiccups: Some files refuse to shrink/move even if programmed to do so (e.g., on Mobile Media settings, the disclaimer at the bottom isn't always responding to the resolutions of the page.)
- There is a bug where after deploying the npm to GitHub Pages, the NavBar w/ its Link 'buttons' are invisible--but the links, once you find them and click on them, still function.


## Project Links

My GitHub:
- [https://github.com/thomasfairchild]

My Website:
- [https://thomasfairchild.github.io/]

## Project Description

My goal is to create an app where users can assemble their own team of superheroes/villains. If time permits, I'll expand this by having them face-off against randomly selected heroes/villains, and participating in original missions written my yours truly.

If things go awry, my backup goal will be creating a superhero search site. Wanna know more about Spider-Man or Wonder Woman? There will be a search bar where visitors can find their favorite heroes/villains, and maybe even adding them to their team or favorite list.

The API consists of heroes/villains from different series, movies, TV shows, comics, etc.

## API

My API comes from Superhero API:
https://superheroapi.com/index.html


```
    const findHero = () => {
    fetch(`https://www.superheroapi.com/api.php/10158049149961360/644/`)
    .then((res) => res.json())
    .then((data) => {
      console.log("up in the sky!",data)
    })
  };

  useEffect(() => {
    findHero();
  }, [])
```


## Wireframes


Wireframe:
https://i.imgur.com/rF5Rj8E.jpg

React Architecture:
https://i.imgur.com/PIQhfX7.jpg


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP Components

| Component | Description | 
| --- | :---: |  
- App | This will make the initial data pull and include React Router| 
- Header | This will render the header include the nav | 
- CSS | Stylize | 
- Search | Where the user will search for their hero/villain of choice (useState)| 
- Team | Here's where the user will assemble their team (likely use props) | 

#### PostMVP Components/Other

| Component | Description | 
| --- | :---: |  
- Roster | If possible, this will be where a user can find their hero/villain selection | 
- Mission | Connected w/ Team, here the user can select a special mission | 
- MissionData | Several missions I'll personally write drafts for | 
- Face-Off | Connected w/ Team, the user's team will randomly draw a hero/villain to battle! | 
- FaceoffData | Lists of heroes/villains I'll write drafts for OR connect with the API | 
- After Effects/Photoshop | I'll make an original (animated) banner that will go in the header.

## Time Tracker

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
- | Adding Form | H | 4hrs | 7hrs |
- | Working with API | H | 4hrs | 4hrs |
- | App | H | 3hrs | 8hr |
- | Header | H | 1hr | 1hr |
- | CSS | H | 3hrs | 3hrs |
- | Search | H | 1hr | 3hrs |
- | Team | H | 2hrs | 6hrs | 
- | Roster | H | 2hrs | 4hrs |
- | After Effects/Photoshop | H | 1hr | 3hrs |
- | Total | H | 25 hrs| 39 hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

 If time permits, I'll use Adobe After Effects/Photoshop to whip up original banner(s).

 ## Media Settings

 Mobile: @media only screen and (max-width: 480px)

 Tablet: @media only screen and (max-width: 710px)

 Desktop: @media only screen and (max-width: 1080px)

## Code Snippet

Making function that allows users to search characters, add and/or remove them from their team.
```
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
      setTeamList([...teamList, hero])
    }

    const removeHeroFromTeam = (id) => {
      const newTeamList = teamList.filter(ultra => ultra.id !== id)

      setTeamList(newTeamList)
    }


```
