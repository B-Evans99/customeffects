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
        setSearchString={props.setSearchString}

      />
      <CategoryGroup
        setSearchString={props.setSearchString}
        setNavigation={setNavigation}
        categories={categories}
        setResultsType={props.setResultsType}
      />
    </div>
  );
};

export default FilterBox;
