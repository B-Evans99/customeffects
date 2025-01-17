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
        props.setSearchString(category);
        setResultsType(1);
        history.push("/results");
    }

    return (
        <div className="Category" onClick={categoryClick}>
        {category}
        </div>
    );
}

export default Category;
