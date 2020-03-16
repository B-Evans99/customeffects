import React from "react";
import UploadForm from "./components/uploadForm.js";
import "./App.css";

const ProfilePage = props => {
  let setNavigation = props.setNavigation;

  return (
    <div className="ProfilePage">
      <span style={{ color: "#800", padding: "20px", display: "block" }}>
        This will let users add new effects to the database. As of now, the
        database is incomplete, so users cannot make and access accounts.
        Therefore, <b>hit the OK button to create a new effect.</b> The effect
        will be called <b>Piper's Effect.</b>
      </span>
      <UploadForm categories={props.categories} setEffects={props.setEffects} />
    </div>
  );
};

export default ProfilePage;
