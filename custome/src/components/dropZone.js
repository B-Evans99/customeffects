import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import data from "../data/users.js";

const Dropzone = (props) =>{

  let files = props.files;
  let setFiles = props.setFiles;

  const maxSize = 8048576;

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles} = useDropzone({
    onDrop,
    acceptedFiles: ['application/zip', 'application/x-7z-compressed'],
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  
  return (
    <div {...getRootProps()} className="Dropzone">
      <input {...getInputProps()} />
      <div className="dropText">
      {!isDragActive && files.length == 0 && 'Click here or drop a file to upload!'}
        {isDragActive && files.length == 0 && !isDragReject && "Drop the file to upload it."}
        {isDragReject && files.length == 0 && "Please use a *.zip file!"}
        {isFileTooLarge && (
          <div className="fileSizeWarning">
            File is too large.
          </div>
        )}
      </div>
      <div className="uploadedFiles">
        {files.length > 0 && files.map(acceptedFile => (
        <div className="uploadedFile">
          {acceptedFile.name}
        </div>
        ))}
      </div>
    </div>
  )
};
export default Dropzone;