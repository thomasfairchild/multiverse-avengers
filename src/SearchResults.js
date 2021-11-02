import React from 'react';
import HeroList from './HeroList';

function SearchResults(props) {
  const {heroList = []} = props;
  console.log("Yooo",heroList)

  console.log('heroList', heroList);
  return (
    
    <div>
    <HeroList data={heroList} />
    </div>
  );
}

export default SearchResults;