import React from "react";
import "../App.css";
import profile from "../images/profile.png";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";

const Header = props => {
  let navigation = props.navigation;
  let setNavigation = props.setNavigation;
  let setSearchString = props.setSearchString;
  let setResultsType = props.setResultsType;
  let searchString = props.searchString;

  const registerClick = () => {
    console.log("Register Click");
  };

  const loginClick = () => {
    console.log("Login Click");
  };

  const profileClick = () => {
    console.log("Profile Click");
  };

  return (
    <div className="Header">
      <Link className="Logo" to="/">
        logo
      </Link>
      <SearchBar
        searchString={searchString}
        setResultsType={setResultsType}
        setSearchString={setSearchString}
        setNavigation={setNavigation}
      />
      <div className="accountButtons">
        <img
          src={profile}
          alt="profile"
          onClick={profileClick}
          className="profileIcon"
        />
        <div className="registerButton" onClick={registerClick}>
          register
        </div>
        <div className="loginButton" onClick={loginClick}>
          login
        </div>
      </div>
    </div>
  );
};

export default Header;
