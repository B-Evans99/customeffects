import React from 'react';
import FilterGroup from "./filterGroup.js";
import CategoryGroup from "./categoryGroup.js";
import "../App.css";

const FilterBox = (props) => {

    let filters = props.filters;
    let categories = props.categories;
    
    return (
        <div className="filterBox" >
            <FilterGroup filters = {filters}/>
            <CategoryGroup categories = {categories} />
        </div>
    );
}

export default FilterBox;
