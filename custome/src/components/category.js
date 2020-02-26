import React from 'react';
import "../App.css";
import ResultsPage from '../ResultsPage';



const Category = (props) => {

    let category = props.category;

    let setNavigation = props.setNavigation;

    let setResultsType = props.setResultsType;

    const categoryClick = () =>{
        console.log(category);
        setResultsType(prevstate => prevstate = [1, category]);
        setNavigation(prevstate => prevstate = 2);
    }

    return (
        <div className="Category" onClick={categoryClick}>
        {category}
        </div>
    );
}

export default Category;
