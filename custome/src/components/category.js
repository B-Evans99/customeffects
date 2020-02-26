import React from 'react';
import "../App.css";



const Category = (props) => {

    let category = props.category;

    const categoryClick = () =>{
        console.log(category);
    }

    return (
        <div className="Category" onClick={categoryClick}>
        {category}
        </div>
    );
}

export default Category;
