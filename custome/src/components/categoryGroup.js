import React from 'react';
import Category from "./category.js";
import "../App.css";

const CategoryGroup = (props) => {

    let categories = props.categories;

    let setNavigation = props.setNavigation;

    let setResultsType = props.setResultsType;
    console.log("CAT GROUP "+props.setSearchString)

    return (
        <div className="CategoryGroup">
        <span className="categoryLabel">categories:</span>
          {categories.map(category => {
            return <Category setResultsType={setResultsType} setSearchString={props.setSearchString} setNavigation = {setNavigation} category={category}/>;
           })}
        </div>
    );
}

export default CategoryGroup;
