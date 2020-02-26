import React, { useState } from "react";
import Card from "./components/card.js";
import FilterGroup from "./components/filterGroup.js";
import Header from "./components/header.js";
import CategoryGroup from "./components/categoryGroup.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [effects, setEffects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let [filters, setFilters] = useState(["highest rating", "newest", "most downloads"]);
  let [categories, setCategories] = useState(["blur", "colorization", "vintage", "rotational/skewing", "sharpening", "miscellaneous"]);

  return (
    <div className="App" style={{display:"flex", flexDirection: "column"}}>
      <Header/>
      <div style={{display: "flex", flexDirection:"row"}}>
      <div className="filterBox" >
          <FilterGroup filters = {filters}/>
          <CategoryGroup categories = {categories} />
      </div>
      <div className="cardBox">
        {effects.map(effect => {
          return <Card/>;
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
