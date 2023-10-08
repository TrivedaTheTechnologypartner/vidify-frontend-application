import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-content">
        <h1>Convert Text to Video with AI</h1>
        <p>
          Looking for an easy and quick way to turn text into video online? You
          are in the right place! Wave.video's Al-powered solution allows
          converting blog posts, articles, and text files to engaging
          customizable videos quickly and easily. Create videos from text in a
          matter of a few clicks!
        </p>
        <button>Create Video</button>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default MainPage;
