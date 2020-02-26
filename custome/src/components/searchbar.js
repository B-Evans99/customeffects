import React from "react";

const SearchBar = (props) => {

  let setSearchString = props.setSearchString;
  let setResultsType = props.setResultsType;
  let searchString = props.searchString;
  let setNavigation = props.setNavigation;

 
  const handleSubmit = () => {
      setResultsType(prevstate => prevstate = [2, searchString]);
      setNavigation(prevstate => prevstate = 2);
  }


  return (
    <input
      onKeyDown={e => e.key == "Enter"? handleSubmit(): console.log("sad")}
      className="searchBar"
      type="text"
      value={searchString}
      placeholder="Search for an effect.."
      onChange={e => setSearchString(e.target.value)}
    />
  );
}

export default SearchBar;
