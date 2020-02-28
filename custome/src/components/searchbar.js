import React from "react";
import { useHistory } from "react-router-dom";

const SearchBar = props => {
  let setSearchString = props.setSearchString;
  let setResultsType = props.setResultsType;
  let searchString = props.searchString;
  let setNavigation = props.setNavigation;

  const history = useHistory();

  let handleSubmit = () => {
    console.log("blahd fbdslh fbds");
    setResultsType(prevstate => (prevstate = [2, searchString]));
    history.goBack();
    console.log(history);
  };

  return (
    <input
      onKeyDown={e => (e.key == "Enter" ? handleSubmit() : console.log("sad"))}
      className="searchBar"
      type="text"
      value={searchString}
      placeholder="Search for an effect.."
      onChange={e => setSearchString(e.target.value)}
    />
  );
};

export default SearchBar;
