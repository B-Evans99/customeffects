import React from 'react';
import Category from "./category.js";
import "../App.css";

const CategoryGroup = (props) => {

    let categories = props.categories;

    let setNavigation = props.setNavigation;

    return (
        <div className="CategoryGroup">
        <span style={{fontSize: "20px"}}>categories:</span>
          {categories.map(category => {
            return <Category setNavigation = {setNavigation} category={category}/>;
           })}
        </div>
    );
}

export default CategoryGroup;
