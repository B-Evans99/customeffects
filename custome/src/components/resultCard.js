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
  let effect = props.effect;

  const cardClick = () => {
    setResultsType(prevstate => (prevstate = [3, effectName]));
    setNavigation(prevstate => (prevstate = 2));
  };

  return (
    <div className="resultCard" >
        <img src={resultImg} className="resultCardImg" alt="blur" height={90} />
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
                        {effect.downloads} <span className="cardDownloadText">downloads</span>
                    </span>
                </div>
                <div className="cardAuthorName">by {users.users[effect.user].name}
                    <img style={{paddingBottom: "2px"}} src={dot} className="cardDotImg" alt="." width={3} />
                    <span className="date">
                        {new Date(effect.date * 1000).getFullYear()}
                    </span>
                </div>
        </div>
    </div>
  );
};

export default ResultCard;
