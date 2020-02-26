import React, { useState } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import CategoryResultsPage from "./CategoryResultsPage.js";
import "./App.css";

function App() {

  // 1 = initial page, 2 = category results page
  let [navigation, setNavigation] = useState(1);

  let [effects, setEffects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [filters, setFilters] = useState(["highest rating", "newest", "most downloads"]);
  let [categories, setCategories] = useState(["blur", "colorization", "vintage", "rotational/skewing", "sharpening", "miscellaneous"]);

  return(
    <div className="App" >
      <Header setNavigation = {setNavigation} navigation = {navigation} />
      {navigation == 1? <HomePage setNavigation = {setNavigation} effects = {effects} filters = {filters} categories = {categories}/>: <CategoryResultsPage />}
    </div>
  )
}

export default App;
