import React from 'react';
import Filter from "./filter.js";
import "../App.css";

const FilterGroup = (props) => {

    let filters = props.filters;

    return (
        <div className="FilterGroup" >
            <span style={{fontSize: "20px"}}>filters:</span>
            {filters.map(filter => {
                return <Filter filter={filter}/>;
            })}
        </div>
    );
}

export default FilterGroup;
