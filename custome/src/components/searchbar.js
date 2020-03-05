import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const SearchBar = props => {
  let setSearchString = props.setSearchString;
  let setResultsType = props.setResultsType;
  let searchString = props.searchString;
  let setNavigation = props.setNavigation;

  const history = useHistory();

  let handleSubmit = () => {
    setLocalString(localString=>{
      setSearchString(localString);
      setResultsType(2);
      return localString});
    
    history.push("/results");
  };

  let [localString,setLocalString] = useState(searchString)

  return (
    <input
      onKeyDown={e => (e.key == "Enter" ? handleSubmit() : console.log("sad"))}
      className="searchBar"
      type="text"
      value={localString}
      placeholder="Search for an effect.."
      onChange={e => setLocalString(e.target.value)}
    />
  );
};

export default SearchBar;
