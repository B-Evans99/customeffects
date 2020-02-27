import React, {useState} from 'react';
import ResultBox from "./components/resultBox.js";
import DescriptionBox from "./components/descriptionBox.js";
import "./App.css";

const ResultsPage = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    let effects = props.effects;

    let setNavigation = props.setNavigation;

    let resultsType = props.resultsType;

    let effect = effects[0];

    for(var i = 0; i< effects.length; i++){
        if(effects[i].name == resultsType[1]){
            effect = effects[i];
        }
    }

    let [focusedEffect, setFocusedEffect] = useState(effect);
    
    return (
        <div className = "ResultsPage">
            <ResultBox resultsType={resultsType} effects={effects} focusedEffect = {focusedEffect} setFocusedEffect={setFocusedEffect} />
            <DescriptionBox effects={effects} focusedEffect = {focusedEffect}/>
        </div>
    );
}

export default ResultsPage;
