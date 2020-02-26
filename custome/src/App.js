import React, { useState } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import ResultsPage from "./ResultsPage.js";
import ProfilePage from "./ProfilePage.js";
import "./App.css";

function App() {

  // 1 = initial page, 2 = results page, 3 = profile page
  let [navigation, setNavigation] = useState(1);

  let [effects, setEffects] = useState(["gaussian blur", "motion blur", "bilateral blur", "box blur", "grayscale", "sepia", "pop art", "instagram overlays", "mirroring", "splintering", "underwater cast", "ripple"]);
  let [filters, setFilters] = useState(["highest rating", "newest", "most downloads"]);
  let [categories, setCategories] = useState(["blur", "colorization", "vintage", "rotational/skewing", "sharpening", "miscellaneous"]);
  let [searchString, setSearchString] = useState("");

  // 1 = category, 2 = search, 3 = description/recommendations
  let [resultsType, setResultsType] = useState([1, "blur"]);

  return(
    <div className="App" >
      <Header searchString = {searchString} setSearchString = {setSearchString} setResultsType = {setResultsType} setNavigation = {setNavigation} navigation = {navigation} />
      {navigation == 1? 
      <HomePage setResultsType = {setResultsType} setNavigation = {setNavigation} effects = {effects} filters = {filters} categories = {categories}/>: 
      navigation == 2?
      <ResultsPage resultsType = {resultsType} setNavigation = {setNavigation}/>:
      <ProfilePage setNavigation = {setNavigation} />}
    </div>
  )
}

export default App;
