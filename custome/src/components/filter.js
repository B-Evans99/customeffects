import React from 'react';
import "../App.css";

const Filter = (props) => {

    let filter = props.filter;

  return (
    <div className="Filter" >
        <span>
            {filter}
            <input type="checkbox" className = "checkbox" />
        </span>
    </div>
  );
}

export default Filter;
