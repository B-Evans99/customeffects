import React from 'react';
import Card from "./card.js";
import "../App.css";

const CardBox = (props) => {

    let effects = props.effects;
    
    return (
        <div className="cardBox">
        {effects.map(effect => {
          return <Card/>;
        })}
      </div>
    );
}

export default CardBox;
