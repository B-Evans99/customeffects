import React from "react";
import FilterGroup from "./filterGroup.js";
import CategoryGroup from "./categoryGroup.js";
import "../App.css";

const FilterBox = props => {
  let filters = props.filters;
  let categories = props.categories;

  let setNavigation = props.setNavigation;

  return (
    <div className="filterBox">
      <FilterGroup
        filters={filters}
        sortByRating={props.sortByRating}
        sortByDownloads={props.sortByDownloads}
        sortByNewest={props.sortByNewest}
        setEffects={props.setEffects}
      />
      <CategoryGroup setNavigation={setNavigation} categories={categories} />
    </div>
  );
};

export default FilterBox;
