import React from "react";
import ResultCard from "./resultCard.js";
import "../App.css";

const ResultBox = props => {
  let focusedEffect = props.focusedEffect;
  let setFocusedEffect = props.setFocusedEffect;
  let searchString = props.searchString;

  let resultsType = props.resultsType;

  let results = props.results;

  console.log("RESULTS TYPE "+resultsType)

  return (
    <div className="resultBox" >
      <div className= "resultsTitle">
        {/* this functions- don't delete it again */}
          {resultsType == 1? "results for " + searchString + " category": resultsType == 2? "search results for " + searchString: "results similar to " + searchString}
       </div>
        {results.map(effect =>{
           return <ResultCard effect = {effect} focusedEffect = {focusedEffect} setFocusedEffect={setFocusedEffect} />;
        })}
    </div>
  );
};

export default ResultBox;
