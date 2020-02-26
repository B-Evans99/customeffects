import React from 'react';
import Header from "./components/header.js";
import CardBox from "./components/cardBox.js";
import FilterBox from "./components/filterBox.js";
import "./App.css";

const HomePage = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    let effects = props.effects;
    
    return (
        <div className = "HomePage">
            <FilterBox categories = {categories} filters = {filters}/>
            <CardBox effects = {effects} />
        </div>
    );
}

export default HomePage;
