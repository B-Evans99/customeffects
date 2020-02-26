import React from "react";
import Card from "./card.js";
import "../App.css";

const CardBox = props => {
  let effects = props.effects;
  let setResultsType = props.setResultsType;
  let setNavigation = props.setNavigation;
  return (
    <div className="cardBox">
      {effects.map((effect, i) => {
        console.log(effect);
        return (
          <Card
            key={i}
            effect={effect}
            setResultsType={setResultsType}
            setNavigation={setNavigation}
          />
        );
      })}
    </div>
  );
};

export default CardBox;
