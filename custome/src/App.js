import React, { useState } from "react";
import Card from "./components/card.js";
import Filter from "./components/filter.js";
import Header from "./components/header.js";
import Category from "./components/category.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [effects, setEffects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <div className="App" style={{display:"flex", flexDirection: "column"}}>
      <Header/>
      <div style={{display: "flex", flexDirection:"row"}}>
      <div className="filterBox" >
        <div>
          filters:
          <Filter/>
          <Filter/>
          <Filter/>
          categories:
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
        </div>
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
