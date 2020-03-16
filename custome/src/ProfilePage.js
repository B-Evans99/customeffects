import React from "react";
import UploadForm from "./components/uploadForm.js";
import "./App.css";

const ProfilePage = props => {
  let setNavigation = props.setNavigation;

  return (
    <div className="ProfilePage">
      <span style={{ color: "#800", padding: "20px", display: "block" }}>
        This will let users add new effects to the database. As of now, only the
        name, description, and categories are saved, and because the database is
        still in progress, new effects disappear on site reload.
      </span>
      <UploadForm categories={props.categories} setEffects={props.setEffects} />
    </div>
  );
};

export default ProfilePage;
