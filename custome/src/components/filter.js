import React from "react";
import "../App.css";

const Filter = props => {
  let filter = props.filter;
  let checked = props.checked;
  let setChecked = props.setChecked;

  const checkClick = () => {
   if(checked != filter){
      setChecked(filter);
   }
    console.log(props.modify);
    console.log(props.setEffects);
    props.setEffects(effects => {
      return JSON.parse(JSON.stringify(props.modify(effects)));
    });
  }


  return (
    <div className="Filter">
      {filter}
      <input
        className = "checkbox"
        type="checkbox"
        checked= {filter == checked? true: false}
        onClick = {checkClick}
      />
    </div>
  );
};

export default Filter;
