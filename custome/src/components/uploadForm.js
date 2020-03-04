import React from "react";
import { useHistory } from "react-router-dom";

const UploadForm = props => {


  return (
    <form className="UploadForm">
        <label className="effectNameInput">
            <input
                type="text"  
            />
            <span>effect name</span>
        </label>
        <div className="buttonInputs">
            <input className="resetButton" value="cancel" type="reset" />
            <input className="submitButton" value="ok" type="submit" />
        </div>
    </form>
  );
};

export default UploadForm;
