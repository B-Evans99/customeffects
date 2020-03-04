import React from 'react';
import UploadForm from "./components/uploadForm.js";
import "./App.css";
import MyDropzone from './components/dropZone.js';

const ProfilePage = (props) => {

    let setNavigation = props.setNavigation;
    
    return (
        <div className = "ProfilePage">
            Profile Page
            <MyDropzone/>
            <UploadForm />
        </div>
    );
}

export default ProfilePage;
