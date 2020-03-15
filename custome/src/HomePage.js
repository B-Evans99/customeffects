import React from "react";
import Header from "./components/header.js";
import CardBox from "./components/cardBox.js";
import FilterBox from "./components/filterBox.js";
import "./App.css";

const HomePage = props => {
  let filters = props.filters;
  let categories = props.categories;
  let effects = props.effects;

  let setNavigation = props.setNavigation;

  let setResultsType = props.setResultsType;

  return (
    <div className="HomePage">
      <FilterBox
        setSearchString={props.setSearchString}
        sortByDownloads={props.sortByDownloads}
        sortByRating={props.sortByRating}
        sortByNewest={props.sortByNewest}
        setNavigation={setNavigation}
        categories={categories}
        filters={filters}
        setEffects={props.setEffects}
        setResultsType={props.setResultsType}
      />
      
      <CardBox
        setNavigation={setNavigation}
        effects={effects}
        setSearchString={props.setSearchString}
        setResultsType ={setResultsType}
      />
      </div>
  );
};

export default HomePage;
