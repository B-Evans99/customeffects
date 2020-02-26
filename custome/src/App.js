import React, { useState } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import "./App.css";

function App() {
  let [effects, setEffects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [filters, setFilters] = useState(["highest rating", "newest", "most downloads"]);
  let [categories, setCategories] = useState(["blur", "colorization", "vintage", "rotational/skewing", "sharpening", "miscellaneous"]);

  return (
    <div className="App" style={{display:"flex", flexDirection: "column"}}>
      {/* <Header/> */}
      <HomePage effects = {effects} filters = {filters} categories = {categories}/>
    </div>
  );
}

export default App;
