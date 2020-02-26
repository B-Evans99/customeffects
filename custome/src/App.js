import React, { useState } from "react";
import Header from "./components/header.js";
import HomePage from "./HomePage.js";
import ResultsPage from "./ResultsPage.js";
import ProfilePage from "./ProfilePage.js";
import "./App.css";
import data from "./data/users.js";

let sortByDownloads = effects => {
  effects.sort((a, b) => {
    return a.downloads <= b.downloads;
  });
  return effects;
};

let sortByRating = effects => {
  effects.sort((a, b) => {
    return a.rating <= b.rating;
  });
  return effects;
};

let sortByNewest = effects => {
  effects.sort((a, b) => {
    return a.date <= b.date;
  });
  return effects;
};

function App() {
  // 1 = initial page, 2 = results page, 3 = profile page
  let [navigation, setNavigation] = useState(1);

  let [users, setUsers] = useState(data.users);
  let [effects, setEffects] = useState(data.effects);
  let [searchString, setSearchString] = useState("");
  let [filters, setFilters] = useState([
    "rating",
    "downloads",
    "newest"
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
        <ResultsPage setNavigation={setNavigation} resultsType={resultsType} />
      ) : (
        <ProfilePage setNavigation={setNavigation} />
      )}
    </div>
  );
}

export default App;
