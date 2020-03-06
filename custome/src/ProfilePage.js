import React from 'react';
import UploadForm from "./components/uploadForm.js";
import "./App.css";
import Dropzone from './components/dropZone.js';

const ProfilePage = (props) => {

    let setNavigation = props.setNavigation;
    
    return (
        <div className = "ProfilePage">
            Profile Page
            {/* This may need to live in the form - idk 
                here's the link to the website: https://github.com/react-dropzone/react-dropzone */}
            <Dropzone />
            <UploadForm />
        </div>
    );
}

export default ProfilePage;
