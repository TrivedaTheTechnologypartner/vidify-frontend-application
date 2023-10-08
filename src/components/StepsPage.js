import React from "react";
import "./StepsPage.css";

function StepsPage() {
  return (
    <div className="steps-page">
      <h2 className="steps-header">
        How to turn text into video with MediaGen:
      </h2>
      <h2 className="steps-header1">Step-by-step guide</h2>
      <div className="step">
        <div className="step-content">
          <h2 className="cont">Step 1</h2>
          <h3 className="cont">Open the converter</h3>
          <p className="cont">
            First, open MediaGen, go to the My Projects page and click on the
            button "+ New Video" on the right-hand side of the screen. Then,
            pick the suitable option from the drop-down menu.
          </p>
        </div>
        <div className="step-image">
          <img src="step1-screenshot.png" alt="Step 1 Screenshot" />
        </div>
      </div>
      {/* <div className="step">
        <div className="step-image">
          <img src="step2-screenshot.png" alt="Step 2 Screenshot" />
        </div>
        <div className="step-content">
          <h2>Step 2: Second Step</h2>
          <p>Description of the second step goes here.</p>
        </div>
      </div> */}
    </div>
  );
}

export default StepsPage;
