import React from "react";
import "../App.css";
import profile from "../images/profile.png";
import SearchBar from "./searchbar";

const Header = (props) =>{

  let navigation = props.navigation;
  let setNavigation = props.setNavigation;

  const logoClick = () =>{
    console.log("Logo Click");
    setNavigation(1);
  }

  const registerClick = () => {
    console.log("Register Click");
  }

  const loginClick = () => {
    console.log("Login Click");
  }

  const profileClick = () => {
    console.log("Profile Click");
  }

  return (
    <div className="Header">
      <div className = "Logo" onClick={logoClick}>
        logo 
      </div>
      <SearchBar /> 
      <div className = "accountButtons">
        <img src = {profile} alt="profile" onClick = {profileClick} className = "profileIcon" />
        <div className = "registerButton" onClick= {registerClick}>
          register
        </div> 
        <div className = "loginButton" onClick={loginClick}>
          login
        </div>
      </div>
      
    </div>
  );
}

export default Header;
