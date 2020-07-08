import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="background">
      <div className="pink-background">
        <div className="container all-weather">
          <div className="row">
            <div className="col-9 left-panel">
              <h1>{props.data.city}</h1>
              <p className="quote">all weather is ice cream weather</p>
              <div className="temp-line">
                <WeatherTemperature farn={props.data.temp} />
                <WeatherIcon
                  className="weather-icon"
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </div>
              <ul className="weather-description">
                <li>{props.data.description}</li>
                <li>wind: {props.data.wind}mph</li>
                <li>humidity: {props.data.humidity}%</li>
              </ul>
            </div>
            <div className="col-3 right-panel">
              <ul>
                <li>{props.data.day}</li>
                <li>{props.data.time}</li>
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
          fillOpacity="1"
          d="M0,64L60,58.7C120,53,240,43,360,32C480,21,600,11,720,42.7C840,75,960,149,1080,154.7C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
