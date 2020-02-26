import React from "react";
import blur from "../images/blur.png";
import star from "../images/star.png";
import dot from "../images/dot.png";
import "../App.css";
import users from "../data/users.js";

const Card = ({ effect }) => {
  return (
    <div className="Card">
      <div className="cardAuthorName">by {users.users[effect.user].name}</div>
      <img src={blur} className="cardImg" alt="blur" />
      <div className="cardEffectName">{effect.name}</div>
      <div className="cardText">
        <img
          src={star}
          style={{ paddingRight: "4px" }}
          className="cardStarImg"
          alt="star"
          width={20}
        />
        <span className="cardRatingText">
          {effect.rating}{" "}
          <span className="cardRatingTotal">({effect.reviewers})</span>
        </span>
        <img src={dot} className="cardDotImg" alt="." width={5} />
        <span className="cardDownloadLine">
          {effect.downloads} <span className="cardDownloadText">downloads</span>
        </span>
        <img src={dot} className="cardDotImg" alt="." width={5} />
        <span className="date">
          {new Date(effect.date * 1000).getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default Card;
