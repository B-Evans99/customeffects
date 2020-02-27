import React from "react";
import resultImg from "../images/result.png";
import "../App.css";

const DescriptionBox = props => {
 
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;
  let effect = props.focusedEffect;

  return (
    <div className="descriptionBox">
      <img src={resultImg} alt="effect image" className="descriptionImage" width={600} height = {300}/>
      <div className="descriptionText" >
        <div className="descriptionName">{effect.name}</div>
        <div className="descriptionDesc">{effect.desc}</div>
      </div> 
    </div>
  );
};

export default DescriptionBox;
