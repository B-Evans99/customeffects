import React from "react";
import ResultCard from "./resultCard.js";
import "../App.css";

const ResultBox = props => {
 
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;

  let effects = props.effects;

  return (
    <div className="resultBox">
        {effects.map(effect =>{
           return <ResultCard effect = {effect}/>;
        })}
    </div>
  );
};

export default ResultBox;
