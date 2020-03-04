import React, {useState, useEffect} from 'react';
import ResultBox from "./components/resultBox.js";
import DescriptionBox from "./components/descriptionBox.js";
import "./App.css";

const ResultsPage = (props) => {
    let results = props.results;
    let [focusedEffect, setFocusedEffect] = useState(results[0]);
    console.log(results)
    console.log(focusedEffect)


    useEffect(()=>{
        setFocusedEffect(results[0]);
    },[results])

    

    if(results.length<1 || focusedEffect==undefined){
        return <div className="ResultsPage">
            <h2>There are no search results for {props.searchString}.</h2>
        </div>
    }
    return (
    <div className="ResultsPage">
        <ResultBox 
          results={results} 
          resultsType={props.resultsType}
          setResultsType={props.setResultsType}
          focusedEffect = {focusedEffect} 
          setFocusedEffect={setFocusedEffect} />
        <DescriptionBox results={results} focusedEffect = {focusedEffect}/>
    </div>
    )

        
}

export default ResultsPage;
