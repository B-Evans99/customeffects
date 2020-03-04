import React from "react";
import ResultCard from "./resultCard.js";
import "../App.css";

const ResultBox = props => {
 
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;

  let focusedEffect = props.focusedEffect;
  let setFocusedEffect = props.setFocusedEffect;

  let resultsType = props.resultsType;

  let results = props.results;

  return (
    <div className="resultBox" >
      <div className= "resultsTitle">
        {/* this functions- don't delete it again */}
          {resultsType[0] == 1? resultsType[1] + " category results": resultsType[0] == 2? "search results for " + resultsType[1]: "results similar to " + resultsType[1]}
       </div>
        {results.map(effect =>{
           return <ResultCard effect = {effect} focusedEffect = {focusedEffect} setFocusedEffect={setFocusedEffect} />;
        })}
    </div>
  );
};

export default ResultBox;
