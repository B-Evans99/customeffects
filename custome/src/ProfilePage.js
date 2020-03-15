import React from 'react';
import UploadForm from "./components/uploadForm.js";
import "./App.css";

const ProfilePage = (props) => {

    let setNavigation = props.setNavigation;
    
    return (
        <div className = "ProfilePage">
            Profile Page            
            <UploadForm categories = {props.categories} />
        </div>
    );
}

export default ProfilePage;
