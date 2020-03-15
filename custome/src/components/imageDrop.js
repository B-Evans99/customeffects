import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import data from "../data/users.js";

const ImageDrop = (props) =>{

  let img = props.img;
  let setImg = props.setImg;

  const maxSize = 8048576;

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    setImg(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles} = useDropzone({
    onDrop,
    acceptedFiles: ['image/png', 'image/tiff', 'image/svg+xml', 'image/jpeg'],
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  
  return (
    <div {...getRootProps()} className="ImageDrop">
      <input {...getInputProps()} />
      <div className="dropText">
      {!isDragActive && img.length == 0 && 'click here or drop an image file to upload!'}
        {isDragActive && img.length == 0 && !isDragReject && "drop the file to upload it."}
        {isDragReject && img.length == 0 && "please use an image file!"}
        {isFileTooLarge && (
          <div className="fileSizeWarning">
            File is too large.
          </div>
        )}
      </div>
      <div className="uploadedFiles">
        {img.length > 0 && img.map(acceptedFile => (
        <div className="uploadedFile">
          {acceptedFile.name}
        </div>
        ))}
      </div>
    </div>
  )
};
export default ImageDrop;