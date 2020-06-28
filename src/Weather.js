import React from "react";
import "./Weather.css";

export default function TopBar() {
  return (
    <div className="background">
      <div className="pink-background">
        <div className="container all-weather">
          <div className="row">
            <div className="col-7 right-panel">
              <h1>New York</h1>
              <p className="quote">all weather is ice cream weather</p>
              <div className="temp-line">
                <span className="temp">55°</span>{" "}
                <span className="metric">C | F</span>{" "}
                <img
                  className="weather-icon"
                  src="https://static.thenounproject.com/png/39152-200.png"
                  alt="icon"
                />
              </div>
              <ul className="weather-description">
                <li>partly cloudy</li>
                <li>wind: 30mph</li>
                <li>humidity: 20%</li>
              </ul>
            </div>
            <div className="col-4 left-panel">
              <ul>
                <li>tuesday</li>
                <li>january 27 2020</li>
                <li>08:05</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F8DCE6"
          fill-opacity="1"
          d="M0,64L60,58.7C120,53,240,43,360,32C480,21,600,11,720,42.7C840,75,960,149,1080,154.7C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
