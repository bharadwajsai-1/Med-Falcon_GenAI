import React, { useState } from 'react';
import "./ImageUploader.css"

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateOutput = () => {
    // Perform your output generation logic here
    const generatedOutput = `Generated output for ${inputText}`;
    setOutputText(generatedOutput);
  };

  return (
    <div className="image-uploader-container">
      <div className="section-container">
        <input type="text" className="input-field" value={inputText} onChange={handleInputChange} placeholder="Enter text" />
        <input type="file" onChange={handleImageUpload} />
      </div>
      {selectedImage && (
        <div className="section-container">
          <img src={selectedImage} alt="Selected" className="image-preview" />
          <p>Selected Image: {selectedImage.name}</p>
        </div>
      )}
      <div className="button-container">
        <button onClick={handleGenerateOutput}>Generate Output</button>
      </div>
      {outputText && (
        <div className="section-container">
          <p className="output-text">Output: {outputText}</p>
        </div>
      )}
      <div className="bottom-input-container">
        <input type="text" className="input-field" value={inputText} placeholder="See Details here" />
      </div>
    </div>
  );
};

export default ImageUploader;
