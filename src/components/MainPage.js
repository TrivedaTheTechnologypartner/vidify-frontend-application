import React, { useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUploadTextPopupOpen, setIsUploadTextPopupOpen] = useState(false);
  const [isUploadVideoLinkPopupOpen, setIsUploadVideoLinkPopupOpen] =
    useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openUploadTextPopup = () => {
    setIsUploadTextPopupOpen(true);
  };

  const closeUploadTextPopup = () => {
    setIsUploadTextPopupOpen(false);
  };

  const openUploadVideoLinkPopup = () => {
    setIsUploadVideoLinkPopupOpen(true);
  };

  const closeUploadVideoLinkPopup = () => {
    setIsUploadVideoLinkPopupOpen(false);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div className="main-page">
      <div className="main-content">
        <h1>Convert Text to Video with AI</h1>
        <p>
          Looking for an easy and quick way to turn text into video online? You
          are in the right place! Wave.video's AI-powered solution allows
          converting blog posts, articles, and text files to engaging
          customizable videos quickly and easily. Create videos from text in a
          matter of a few clicks!
        </p>
        <button className="create-video-button" onClick={toggleDropdown}>
          Create Video
          <span className="dropdown-icon">&#9660;</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={openUploadTextPopup}>Upload Text</button>
            <button onClick={openUploadVideoLinkPopup}>
              Upload Video Link
            </button>
          </div>
        )}
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {isUploadTextPopupOpen && (
        <div className="popup-overlay">
          <div className="upload-text-popup">
            <h2>Generate Video from Text</h2>
            <textarea
              rows="5"
              cols="50"
              placeholder="Enter your text here"
            ></textarea>
            <div className="button-container">
              <button onClick={closeUploadTextPopup}>Close</button>
              <button className="generate-button">Generate</button>
            </div>
          </div>
        </div>
      )}
      {isUploadVideoLinkPopupOpen && (
        <div className="popup-overlay">
          <div className="upload-video-link-popup">
            <h2>Convert a Blog post into video</h2>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Enter the video URL"
              value={videoUrl}
              onChange={handleVideoUrlChange}
            />
            <div className="button-container">
              <button onClick={closeUploadVideoLinkPopup}>Close</button>
              <button className="generate-button">Generate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
