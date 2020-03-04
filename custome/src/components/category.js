import React from 'react';
import "../App.css";
import ResultsPage from '../ResultsPage';
import { useHistory } from "react-router-dom";



const Category = (props) => {

    let category = props.category;

    let setNavigation = props.setNavigation;

    let setResultsType = props.setResultsType;

    const history = useHistory();

    const categoryClick = () =>{
        console.log(category);
        setResultsType(prevstate => prevstate = [1, category]);
        history.push("/results");
    }

    return (
        <div className="Category" onClick={categoryClick}>
        {category}
        </div>
    );
}

export default Category;
