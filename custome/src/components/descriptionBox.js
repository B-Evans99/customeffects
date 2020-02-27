import React from "react";
import resultImg from "../images/result.png";
import dot from "../images/dot.png";
import "../App.css";
import users from "../data/users.js";

const DescriptionBox = props => {
 
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;
  let effect = props.focusedEffect;

  return (
    <div className="descriptionBox">
      <img src={resultImg} alt="effect image" className="descriptionImage" />
      <div className="descriptionText" >
        <div className="descriptionName">{effect.name}</div>
        <div className="descriptionAuthYear">
          <span className="descriptionAuth">by {users.users[effect.user].name}</span>
          <img style={{paddingBottom: "2px"}} src={dot} className="cardDotImg" alt="." width={3} />
          <span className="descriptionYear">{new Date(effect.date * 1000).getFullYear()}</span>
        </div>
        <div className="descriptionDesc">{effect.desc}</div>
      </div> 
    </div>
  );
};

export default DescriptionBox;
