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
                    results for thing
                </div>
        {results.map(effect =>{
           return <ResultCard effect = {effect} focusedEffect = {focusedEffect} setFocusedEffect={setFocusedEffect} />;
        })}
    </div>
  );
};

export default ResultBox;
