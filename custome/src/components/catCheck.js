import React, {useState, useEffect} from "react";
import "../App.css";

const CatCheck = (props) => {

    let category = props.category;
    let cats = props.cats;
    let setCats = props.setCats;
    let [checked, setChecked] = useState(false);

    useEffect(()=> {
        setCats(cats=> {
            return(cats.includes(category)? cats.filter(e=> e== category): cats.concat(category));          
        })
    }, [checked]);

    return(
        <label className="catsLabel">
            <span className="catsText"> {category} </span> 
            <input type="checkbox" className="catCheck" checked={checked} onChange={e => setChecked(check => check = !check)}/>
        </label>
    );

}
export default CatCheck;

