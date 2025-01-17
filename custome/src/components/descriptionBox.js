import React, { useState } from "react";
import { Link } from "react-router-dom";
import resultImg from "../images/result.png";
import resultImg2 from "../images/result_big.png";
import dot from "../images/dot.png";
import downloadNoHover from "../images/download.png";
import downloadHover from "../images/download_hover.png";
import "../App.css";
import users from "../data/users.js";
var fileDownload = require("js-file-download");

const DescriptionBox = props => {
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;
  let effect = props.focusedEffect;

  let [hoverDownload, setHoverDownload] = useState(false);

  var download = hoverDownload ? downloadHover : downloadNoHover;

  return (
    <div className="descriptionBox">
      <img src={resultImg2} alt="effect image" className="descriptionImage" />
      <div className="descriptionText">
        <div className="descriptionHeader">
          <div className="decriptionHeaderLeft">
            <div className="descriptionName">{effect.name}</div>
            <div className="descriptionAuthYear">
              <span className="descriptionAuth">
                by {users.users[effect.user].name}
              </span>
              <img
                style={{ paddingBottom: "2px" }}
                src={dot}
                className="cardDotImg"
                alt="."
                width={3}
              />
              <span className="descriptionYear">
                {new Date(effect.date * 1000).getFullYear()}
              </span>
            </div>
          </div>
          <Link to={effect.script} target="_blank" download>
            <img
              className="downloadButton"
              src={download}
              alt="download"
              onMouseOver={() => setHoverDownload(true)}
              onMouseLeave={() => setHoverDownload(false)}
            />
          </Link>
        </div>
        <div className="descriptionDesc">
          {effect.desc}

          <span style={{ color: "#800" }}>
            All of the effects currently download one example script,{" "}
            <b>AnimatedSnow.scm</b>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
