import React, { useState } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import ResultsPage from "./ResultsPage.js";
import ProfilePage from "./ProfilePage.js";
import "./App.css";

function App() {

  // 1 = initial page, 2 = results page, 3 = profile page
  let [navigation, setNavigation] = useState(1);

  let [effects, setEffects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [filters, setFilters] = useState(["highest rating", "newest", "most downloads"]);
  let [categories, setCategories] = useState(["blur", "colorization", "vintage", "rotational/skewing", "sharpening", "miscellaneous"]);

  return(
    <div className="App" >
      <Header setNavigation = {setNavigation} navigation = {navigation} />
      {navigation == 1? 
      <HomePage setNavigation = {setNavigation} effects = {effects} filters = {filters} categories = {categories}/>: 
      navigation == 2?
      <ResultsPage setNavigation = {setNavigation}/>:
      <ProfilePage setNavigation = {setNavigation} />}
    </div>
  )
}

export default App;
