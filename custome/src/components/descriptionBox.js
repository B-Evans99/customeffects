import React, {useState} from "react";
import resultImg from "../images/result.png";
import resultImg2 from "../images/result_big.png";
import dot from "../images/dot.png";
import downloadNoHover from "../images/download.png";
import downloadHover from "../images/download_hover.png";
import "../App.css";
import users from "../data/users.js";
var fileDownload = require('js-file-download');

const DescriptionBox = props => {
 
  let setNavigation = props.setNavigation;
  let setResultsType = props.setResultsType;
  let effect = props.focusedEffect;

  let [hoverDownload, setHoverDownload] = useState(false);

  
  const downloadClick = () =>{
    console.log("download click")
    let effectDownload = effect.name + "\n" + effect.desc;
    fileDownload(effectDownload, 'effectFile.txt');
  }

  var download = hoverDownload? downloadHover: downloadNoHover;

  return (
    <div className="descriptionBox">
      <img src={resultImg2} alt="effect image" className="descriptionImage" />
      <div className="descriptionText" >
      <div className="descriptionHeader">
        <div className="decriptionHeaderLeft">
        <div className="descriptionName">{effect.name}</div>
            <div className="descriptionAuthYear">
              <span className="descriptionAuth">by {users.users[effect.user].name}</span>
              <img style={{paddingBottom: "2px"}} src={dot} className="cardDotImg" alt="." width={3} />
              <span className="descriptionYear">{new Date(effect.date * 1000).getFullYear()}</span>
            </div>
          </div>
          <img className="downloadButton" src = {download} alt="download" onClick={downloadClick} 
                onMouseOver={() => setHoverDownload(true)}
                onMouseLeave = {() => setHoverDownload(false)}/>
        </div>
        <div className="descriptionDesc">{effect.desc}</div>
      </div> 
    </div>
  );
};

export default DescriptionBox;
