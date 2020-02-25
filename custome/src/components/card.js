import React from 'react';
import blur from "../images/blur.png";
import star from "../images/star.png";
import dot from "../images/dot.png";

let ratingAverage = 4.8;
let ratingTotal = 112;
let downloadTotal = 299;
let authorName = "author";
let effectName = "blur effect";

function Card() {
  return (
    <div className="Card" >
      <div className="cardAuthorName" style={{color:"#464646"}}>by {authorName}</div>
      <img src= {blur} className="cardImg" alt="blur" />
      <div style={{fontSize: "22px"}} className="cardEffectName">{effectName}</div>
      <div className="cardText" style={{display:"flex", alignItems:"center"}}>
        <img style={{paddingRight:"4px"}} src={star} className="starImg" alt="star" width={20}/>
        <span className="cardRatingText">{ratingAverage} <span style={{color:"#464646"}} className="cardRatingTotal">({ratingTotal})</span></span>
        <img style={{paddingTop: "4px", paddingRight: "6px", paddingLeft: "6px"}} src={dot} className="cardDotImg" alt="." width={5}/>
        <span className="cardDownloadLine">{downloadTotal} <span style={{color:"#464646"}} className="cardDownloadText">downloads</span></span>
      </div>
    </div>
  );
}

export default Card;
