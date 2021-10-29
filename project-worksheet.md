# Project Overview

Work in progress.

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
- | Adding Form | H | 4hrs |  |
- | Working with API | H | 4hrs |  |
- | App | H | 3hrs |  |
- | Header | H | 1hr |  |
- | CSS | H | 3hrs |  |
- | Search | H | 1hr |  |
- | Team | H | 2hrs |  | 
- | Roster | H | 2hrs |  |
- | Mission | H | 1hr |  |
- | MissionData | H | 1hr |  |
- | Face-Off | H | 1hr |  |
- | FaceoffData | H | 1hr |  |
- | After Effects/Photoshop | H | 1hr |  |
- | Total | H | 25 hrs|  |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

 If time permits, I'll use Adobe After Effects/Photoshop to whip up original banner(s).

 When I learn more, I might use Bootstrap.

 ## Media Settings

 Mobile: @media only screen and (max-width: 480px)

 Tablet: @media only screen and (max-width: 710px)

 Desktop: @media only screen and (max-width: 1080px)

## Code Snippet

Work in progress.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
