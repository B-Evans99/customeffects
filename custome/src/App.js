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

  return (
    <div className="App">
      <Header setNavigation={setNavigation} navigation={navigation} />
      {navigation == 1 ? (
        <HomePage
          setNavigation={setNavigation}
          effects={effects}
          sortByDownloads={sortByDownloads}
          sortByRating={sortByRating}
          sortByNewest={sortByNewest}
          filters={filters}
          categories={categories}
          setEffects={setEffects}
        />
      ) : navigation == 2 ? (
        <ResultsPage setNavigation={setNavigation} />
      ) : (
        <ProfilePage setNavigation={setNavigation} />
      )}
    </div>
  );
}

export default App;
