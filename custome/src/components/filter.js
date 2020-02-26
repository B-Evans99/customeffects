import React from 'react';
import "../App.css";

const Filter = (props) => {

    let filter = props.filter;

  return (
    <div className="Filter" >
        <span>
            {filter}
            <input type="checkbox" style={{marginLeft: "5px",}}/>
        </span>
    </div>
  );
}

export default Filter;
