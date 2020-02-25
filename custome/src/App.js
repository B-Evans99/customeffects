import React, { useState } from "react";
import Card from "./components/card.js";
import Header from "./components/header";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [effects, setEffects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <div className="App">
      <Header></Header>
      <div className="filterBox">
        filter/category column
      </div>
      <div className="cardBox">
        {effects.map(effect => {
          return <Card></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
