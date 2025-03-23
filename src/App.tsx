import React, { useState } from 'react';
import 'tachyons/css/tachyons.min.css';
import './App.css'; 

function App() {
  const [videoSrc, setVideoSrc] = useState("beach.mp4");
  const [tags, setTags] = useState(["TAG 1", "TAG 2", "TAG 3", "TAG 4", "TAG 5"]);
  const [uploader, setUploader] = useState("Uploader Name");

  return (
    <div className="tc">
      <div className="wrapper">
        <div className="video-container">
          <video id="videoPlayer" controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="controls-container">
          <div className="upload-btn-container">
            <button className="uploadUser-btn">{uploader}</button>
          </div>

          <div className="tag-container">
            {tags.map((tag, index) => (
              <button key={index} className="tag-btn">{tag}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
