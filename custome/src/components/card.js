import React from "react";
import blur from "../images/blur.png";
import star from "../images/star.png";
import dot from "../images/dot.png";
import "../App.css";
import users from "../data/users.js";
import { useHistory } from "react-router-dom";

const Card = props => {
  let effectName = props.effect.name;
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;
  let effect = props.effect;

  const history = useHistory();

  const cardClick = () => {
    setResultsType(prevstate => (prevstate = [3, effectName]));
    props.setSearchString(effectName);
    history.push("/results");
  };

  return (
    <div className="Card" onClick={cardClick}>
      <div className="cardAuthorName">
        by {users.users[effect.user].name}
        <img
          style={{ paddingBottom: "2px" }}
          src={dot}
          className="cardDotImg"
          alt="."
          width={3}
        />
        <span className="date">
          {new Date(effect.date * 1000).getFullYear()}
        </span>
      </div>
      <div className="cardImg">
        <img src={blur} alt="blur" />
      </div>
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
      </div>
    </div>
  );
};

export default Card;
