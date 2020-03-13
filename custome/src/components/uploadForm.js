import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Dropzone from './dropZone.js';
import CatCheck from "./catCheck.js";
import emptyImg from "../images/emptyImg.png";
import "../App.css";

const UploadForm = props => {

  let [files, setFiles] = useState([]);
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [cats, setCats] = useState([]);
  let [newEffect, setNewEffect] = useState({name:"", author: "", id: 0, files: [], image: emptyImg, desc: "", cat: [] });
  let [clearChecks, setClearChecks] = useState(0);

  const clearFields = () =>{
    setName("");
    setFiles([]);
    cats.length = 0;
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
        <div className="dropContainer">
        <Dropzone files = {files} setFiles = {setFiles} />
        <span className="dropContText">effect files</span>
        </div>
        <label className="effectNameLabel">
            
            <input
                type="text"  
                className="effectNameInput"
                value={name}
                onChange = {e => setName(e.target.value)}
            />
            <span>effect name</span>
        </label>
        <label className="effectDescLabel">
            <textarea
                type="text"  
                className="effectDescInput"
                value={desc}
                onChange = {e => setDesc(e.target.value)}
            />
            <span>effect description</span>
        </label>
        <div className="formCategories">
        <div className="formCatText">please select all categories that apply:</div>
        <div className="formCatGroup">
          {props.categories.map((category, i)=> {
            return(              
                <CatCheck category={category} cats={cats} setCats={setCats} clearChecks={clearChecks}/>
            );
          })}
        </div>
        </div>
        <div className="buttonInputs">
            <input className="resetButton" value="cancel" type="button" onClick={resetClick}/>
            <input className="submitButton" value="ok" type="button" onClick={submitClick} />
        </div>
    </form>
  );
};

export default UploadForm;
