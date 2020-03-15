import React, { useState, useEffect } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import ResultsPage from "./ResultsPage.js";
import ProfilePage from "./ProfilePage.js";
import "./App.css";
import data from "./data/users.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let sortByDownloads = effects => {
  console.log("SORTING BY DOWNLOADS");
  effects.sort((a, b) => {
    return b.downloads - a.downloads;
  });
  return effects;
};

let sortByRating = effects => {
  console.log("SORTING BY RATING");
  effects.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log(effects);
  return effects;
};

let sortByNewest = effects => {
  console.log("SORTING BY NEWEST");
  effects.sort((a, b) => {
    return b.date - a.date;
  });
  return effects;
};

let findResults = (searchString,effects) => {
  let retEffects = [];
  console.log("EFFECTS "+effects)
  effects.forEach(element => {
    console.log("CATS: "+element.cats)
    if(element.name.includes(searchString) || element.desc.includes(searchString) || element.cats.includes(searchString)){
      retEffects.push(element)
    }
  });
  return sortByRating(retEffects);
}

function App() {
  // 1 = initial page, 2 = results page, 3 = profile page
  let [navigation, setNavigation] = useState(1);

  let [users, setUsers] = useState(data.users);
  let [effects, setEffects] = useState(
    JSON.parse(JSON.stringify(sortByRating(data.effects)))
  );

  let [searchString, setSearchString] = useState("");
  
  let [results, setResults] = useState([]);

  useEffect(()=>{
    setResults(JSON.parse(JSON.stringify(findResults(searchString,effects,resultsType))));
    console.log("RESULTS "+results);
  },[searchString])

  let [filters, setFilters] = useState([
    "highest rating",
    "newest",
    "most downloads"
  ]);
  let [categories, setCategories] = useState([
    "blur",
    "colorization",
    "vintage",
    "rotational/skewing",
    "sharpening",
    "miscellaneous"
  ]);

  // 0 = assume all, 1 = category, 2 = search, 3 = description/recommendations
  let [resultsType, setResultsType] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header
          searchString={searchString}
          setSearchString={setSearchString}
          setNavigation={setNavigation}
          navigation={navigation}
          setNavigation={setNavigation}
          navigation={navigation}
          resultsType={resultsType}
          setResultsType={setResultsType}
        />
        <Switch>
          <Route exact path="/">
            <HomePage
              effects={effects}
              setNavigation={setNavigation}
              sortByDownloads={sortByDownloads}
              sortByRating={sortByRating}
              sortByNewest={sortByNewest}
              filters={filters}
              categories={categories}
              setEffects={setEffects}
              setSearchString={setSearchString}
              setResultsType={setResultsType}
            />
          </Route>
          <Route path="/results">
            <ResultsPage
              effects={effects}
              setNavigation={setNavigation}
              results={results}
              searchString={searchString}
              resultsType={resultsType}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage setNavigation={setNavigation} categories = {categories} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
