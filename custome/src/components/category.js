import React from 'react';
import "../App.css";



const Category = (props) => {

    let category = props.category;

    let setNavigation = props.setNavigation;

    const categoryClick = () =>{
        console.log(category);
        setNavigation(2);
    }

    return (
        <div className="Category" onClick={categoryClick}>
        {category}
        </div>
    );
}

export default Category;
