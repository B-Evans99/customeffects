import React from 'react';
import blur from "../images/blur.png";
import star from "../images/star.png";
import dot from "../images/dot.png";
import "../App.css";

let ratingAverage = 4.8;
let ratingTotal = 112;
let downloadTotal = 299;
let authorName = "author";

const Card = (props) => {

  let effectName = props.effect;
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;

  const cardClick = () => {
    setResultsType(prevstate => prevstate = [3, effectName]);
    setNavigation(prevstate => prevstate = 2);
  }

  return (
    <div className="Card" onClick={cardClick}>
      <div className="cardAuthorName">by {authorName}</div>
      <img src= {blur} className="cardImg" alt="blur" />
      <div className="cardEffectName">{effectName}</div>
      <div className="cardText" >
        <img src={star} style= {{paddingRight: "4px"}} className="cardStarImg" alt="star" width={20}/>
        <span className="cardRatingText">{ratingAverage} <span className="cardRatingTotal">({ratingTotal})</span></span>
        <img src={dot} className="cardDotImg" alt="." width={5}/>
        <span className="cardDownloadLine">{downloadTotal} <span className="cardDownloadText">downloads</span></span>
      </div>
    </div>
  );
}

export default Card;
