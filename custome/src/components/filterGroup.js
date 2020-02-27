import React, { useState } from "react";
import Filter from "./filter.js";
import "../App.css";

const FilterGroup = props => {
  let filters = props.filters;

  let [checked, setChecked] = useState(filters[0]);

  return (
    <div className="FilterGroup">
      <span style={{ fontSize: "20px" }}>sort by:</span>
      <Filter
        effects={props.effects}
        setEffects={props.setEffects}
        filter={filters[0]}
        modify={props.sortByRating}
        checked={checked}
        setChecked={setChecked}
      />
      <Filter
        effects={props.effects}
        setEffects={props.setEffects}
        filter={filters[1]}
        modify={props.sortByNewest}
        checked={checked}
        setChecked={setChecked}
      />
      <Filter
        effects={props.effects}
        setEffects={props.setEffects}
        filter={filters[2]}
        modify={props.sortByDownloads}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default FilterGroup;
