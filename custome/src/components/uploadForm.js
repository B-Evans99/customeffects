import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Dropzone from './dropZone.js';
import ImageDrop from './imageDrop.js';
import CatCheck from "./catCheck.js";
import emptyImg from "../images/emptyImg.png";
import "../App.css";

const UploadForm = props => {

  let [files, setFiles] = useState([]);
  let [img, setImg] = useState([]);
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [cats, setCats] = useState([]);
  let [newEffect, setNewEffect] = useState({name:"", author: "", id: 0, date: new Date.now().getTime(), files: [], image: emptyImg, desc: "", cat: [] });
  let [clearChecks, setClearChecks] = useState(0);

  const clearFields = () =>{
    setName("");
    setFiles([]);
    setImg([]);
    setDesc("");
    cats.length = 0;
  }

  const resetClick = () =>{
    clearFields();
  } 

  const submitClick = () => {
    console.log(newEffect);
    let tempEffect = {name: name, author: "", id: 0, date: new Date.now().getTime(), files: files[0], image: emptyImg, desc: "", cat: [] };
    tempEffect.name = name;
    tempEffect.author = "yours";
    tempEffect.files = files;
    tempEffect.image = img;
    tempEffect.desc = desc;
    tempEffect.cat = cats;
    setNewEffect(newEffect=> newEffect = tempEffect);
    console.log(newEffect);
    clearFields();
  }
  

  return (
    <form className="UploadForm">
      <span className="uploadTitle">upload effect</span>
      {/* This may need to live in the form - idk 
                here's the link to the website: https://github.com/react-dropzone/react-dropzone */}
        <div className="dropContainer">
          <Dropzone files = {files} setFiles = {setFiles} />
          <span className="dropContText">effect files</span>
        </div>
        <div className="dropContainer">
          <ImageDrop img={img} setImg={setImg} />
          <span className="dropContText">effect image</span>
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
