import React, { useState } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import ResultsPage from "./ResultsPage.js";
import ProfilePage from "./ProfilePage.js";
import "./App.css";
import data from "./data/users.js";

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

  // 1 = category, 2 = search, 3 = description/recommendations
  let [resultsType, setResultsType] = useState([1, "blur"]);

  return (
    <div className="App">
      <Header
        searchString={searchString}
        setSearchString={setSearchString}
        setResultsType={setResultsType}
        setNavigation={setNavigation}
        navigation={navigation}
        setNavigation={setNavigation}
        navigation={navigation}
      />
      {navigation == 1 ? (
        <HomePage
          setResultsType={setResultsType}
          effects={effects}
          setNavigation={setNavigation}
          sortByDownloads={sortByDownloads}
          sortByRating={sortByRating}
          sortByNewest={sortByNewest}
          filters={filters}
          categories={categories}
          setEffects={setEffects}
        />
      ) : navigation == 2 ? (
        <ResultsPage
          effects={effects}
          setNavigation={setNavigation}
          resultsType={resultsType}
        />
      ) : (
        <ProfilePage setNavigation={setNavigation} />
      )}
    </div>
  );
}

export default App;
