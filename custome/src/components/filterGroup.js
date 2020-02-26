import React from 'react';
import Filter from "./filter.js";
import "../App.css";

const FilterGroup = (props) => {

    let filters = props.filters;

    return (
        <div className="FilterGroup" >
            <span className="filterLabel">filters:</span>
            {filters.map(filter => {
                return <Filter filter={filter}/>;
            })}
        </div>
    );
}

export default FilterGroup;
