import React from "react";
import resultImg from "../images/result.png";
import star from "../images/star.png";
import dot from "../images/dot.png";
import "../App.css";
import users from "../data/users.js";

const ResultCard = props => {
  let effectName = props.effect.name;
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;

  let focusedEffect = props.focusedEffect;
  let setFocusedEffect = props.setFocusedEffect;

  let effect = props.effect;

  const resultClick = () => {
    setFocusedEffect(prevstate => (prevstate = effect));
  };

  return (
    <div
      className={focusedEffect == effect ? "resultCard selected" : "resultCard"}
      onClick={resultClick}
    >
      <div className="resultCardImg">
        <img src={resultImg} alt={effect.name} height={90} />
      </div>
      <div className="resultCardText">
        <span className="cardEffectName">{effect.name}</span>
        <div className="resultRateDownloadText">
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
            {effect.downloads}{" "}
            <span className="cardDownloadText">downloads</span>
          </span>
        </div>
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
      </div>
    </div>
  );
};

export default ResultCard;
