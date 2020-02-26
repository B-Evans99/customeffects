import React from 'react';
import "./App.css";

const ResultsPage = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    let effects = props.effects;

    let setNavigation = props.setNavigation;

    let resultsType = props.resultsType;
    
    return (
        <div className = "ResultsPage">
            {resultsType[0] == 1? resultsType[1] + " category":
            resultsType[0] == 2? "search results for \"" + resultsType[1] + "\"":
            "similar results"}
            
        </div>
    );
}

export default ResultsPage;
