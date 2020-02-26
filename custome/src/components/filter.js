import React from "react";
import "../App.css";

const Filter = props => {
  let filter = props.filter;

  return (
    <div className="Filter">
      <a
        onClick={() => {
          console.log(props.modify);
          console.log(props.setEffects);
          props.setEffects(effects => {
            return JSON.parse(JSON.stringify(props.modify(effects)));
          });
        }}
      >
        {filter}
      </a>
    </div>
  );
};

export default Filter;
