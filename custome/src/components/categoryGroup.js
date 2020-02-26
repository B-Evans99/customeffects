import React from 'react';
import Category from "./category.js";
import "../App.css";

const CategoryGroup = (props) => {

    let categories = props.categories;

    return (
        <div className="CategoryGroup">
        <span style={{fontSize: "20px"}}>categories:</span>
          {categories.map(category => {
            return <Category category={category}/>;
           })}
        </div>
    );
}

export default CategoryGroup;
