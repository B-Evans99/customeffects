import React from 'react';
import UploadForm from "./components/uploadForm.js";
import "./App.css";
import Dropzone from './components/dropZone.js';

const ProfilePage = (props) => {

    let setNavigation = props.setNavigation;
    
    return (
        <div className = "ProfilePage">
            Profile Page
            <Dropzone/>
            <UploadForm />
        </div>
    );
}

export default ProfilePage;
