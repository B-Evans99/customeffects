import React from 'react';
import "./App.css";

const ResultsPage = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    let effects = props.effects;

    let setNavigation = props.setNavigation;
    
    return (
        <div className = "ResultsPage">
            Results Page
        </div>
    );
}

export default ResultsPage;
