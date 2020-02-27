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
            <div>
                <div className= "resultsTitle">
                    {resultsType[0] == 1? resultsType[1] + " category":
                    resultsType[0] == 2? "search results for \"" + resultsType[1] + "\"":
                    "effects similar to " + resultsType[1]}
                </div>
                <ResultBox effects={effects} focusedEffect = {focusedEffect} setFocusedEffect={setFocusedEffect} />
            </div>
            <DescriptionBox effects={effects} focusedEffect = {focusedEffect}/>
        </div>
    );
}

export default ResultsPage;
