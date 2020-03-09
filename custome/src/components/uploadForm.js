import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Dropzone from './dropZone.js';
import emptyImg from "../images/emptyImg.png";

const UploadForm = props => {

  let [files, setFiles] = useState([]);
  let [name, setName] = useState("");
  let [newEffect, setNewEffect] = useState({name:"", author: "", id: 0, files: [], image: emptyImg, desc: "", cat: [] });

  const clearFields = () =>{
    setName("");
    setFiles([]);
  }

  const resetClick = () =>{
    clearFields();
  } 

  const submitClick = () => {
    console.log(newEffect);
    let tempEffect = {name: name, author: "", id: 0, files: files[0], image: emptyImg, desc: "", cat: [] };
    setNewEffect(newEffect=> newEffect = tempEffect);
    console.log(newEffect);
  }

  return (
    <form className="UploadForm">
      {/* This may need to live in the form - idk 
                here's the link to the website: https://github.com/react-dropzone/react-dropzone */}
        <Dropzone files = {files} setFiles = {setFiles} />
        <label className="effectNameLabel">
            <input
                type="text"  
                className="effectNameInput"
                value={name}
                onChange = {e => setName(e.target.value)}
            />
            <span>effect name</span>
        </label>
        <div className="buttonInputs">
            <input className="resetButton" value="cancel" type="button" onClick={resetClick}/>
            <input className="submitButton" value="ok" type="button" onClick={submitClick} />
        </div>
    </form>
  );
};

export default UploadForm;
