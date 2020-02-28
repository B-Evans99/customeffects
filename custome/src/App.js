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

let search = (term,effects,users) => {
  console.log("SEARCHING...")
  console.log(term);
  console.log(effects);
  console.log(users);
}

function App() {
  // 1 = initial page, 2 = results page, 3 = profile page
  let [navigation, setNavigation] = useState(1);

  let [users, setUsers] = useState(data.users);
  let [effects, setEffects] = useState(
    JSON.parse(JSON.stringify(sortByRating(data.effects)))
  );

  let [searchString, setSearchString] = useState("");
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

  useEffect(()=>{
    search(searchString,effects,users,categories);
  },[searchString])

  // 1 = category, 2 = search, 3 = description/recommendations
  let [results, setResults] = useState({effects:[],users:[],categories:[]});

  return (
    <Router>
      <div className="App">
        <Header
          setSearchString={setSearchString}
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
            />
          </Route>
          <Route path="/results">
            <ResultsPage
              effects={effects}
              results={results}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage setNavigation={setNavigation} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
