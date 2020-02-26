import React from 'react';
import "./App.css";

const CategoryResultsPage = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    let effects = props.effects;

    let setNavigation = props.setNavigation;
    
    return (
        <div className = "CategoryResultsPage">
            Category Results Page
        </div>
    );
}

export default CategoryResultsPage;
