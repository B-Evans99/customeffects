import React, { useState } from "react";
import Filter from "./filter.js";
import "../App.css";

const FilterGroup = props => {
  let filters = props.filters;

  return (
    <div className="FilterGroup">
      <span style={{ fontSize: "20px" }}>sort by:</span>
      <Filter
        effects={props.effects}
        setEffects={props.setEffects}
        filter={"rating"}
        modify={props.sortByRating}
      />
      <Filter
        effects={props.effects}
        setEffects={props.setEffects}
        filter={"downloads"}
        modify={props.sortByDownloads}
      />
      <Filter
        effects={props.effects}
        setEffects={props.setEffects}
        filter={"newest"}
        modify={props.sortByNewest}
      />
    </div>
  );
};

export default FilterGroup;
