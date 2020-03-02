import React, {useState} from 'react';
import ResultBox from "./components/resultBox.js";
import DescriptionBox from "./components/descriptionBox.js";
import "./App.css";

const ResultsPage = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    let results = props.results;

    let setNavigation = props.setNavigation;

    let resultsType = props.resultsType;

    

    let [focusedEffect, setFocusedEffect] = useState(results[0]);
    
    return (
        <div className = "ResultsPage">
            <ResultBox results={results} focusedEffect = {focusedEffect} setFocusedEffect={setFocusedEffect} />
            <DescriptionBox results={results} focusedEffect = {focusedEffect}/>
        </div>
    );
}

export default ResultsPage;
