import React from 'react';


    const SearchBar = ({handleChange, searchText}) => {
        const BarStyling = {
            width:"20rem", 
            background: "#F2F1F9", 
            border: "none", 
            padding: "0.5rem"};

    return (
        <div>
        <input
            style={BarStyling}
            id="search-bar"
            type="search"
            value={searchText}
            placeholder="Search for your character (e.g., Superman, Goku, etc...)"
            onChange={handleChange}
            />
         </div>   
);
    }

export default SearchBar