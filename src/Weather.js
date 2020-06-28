import React, { useState } from "react";
import "./Weather.css";
import icon from "./icon.png";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showCity(response) {
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
    setReady(true);
    console.log(response.data);
  }

  if (ready) {
    return (
      <div>
        <div className="container search">
          <form>
            <div className="row">
              <div className="col-1">
                <img className="icon" src={icon} alt="icon" />
              </div>
              <div className="col-7">
                <input
                  type="text"
                  placeholder="search for a location"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <input type="submit" className="form-control go" value="go" />
              </div>
              <div className="col-2">
                <button className="geolocation">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="background">
          <div className="pink-background">
            <div className="container all-weather">
              <div className="row">
                <div className="col-7 right-panel">
                  <h1>{weatherData.city}</h1>
                  <p className="quote">all weather is ice cream weather</p>
                  <div className="temp-line">
                    <span className="temp">{weatherData.temp}°</span>{" "}
                    <span className="metric">C | F</span>{" "}
                    <img
                      className="weather-icon"
                      src="https://static.thenounproject.com/png/39152-200.png"
                      alt="icon"
                    />
                  </div>
                  <ul className="weather-description">
                    <li>partly cloudy</li>
                    <li>wind: {weatherData.wind}mph</li>
                    <li>humidity: {weatherData.humidity}%</li>
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
              fillOpacity="1"
              d="M0,64L60,58.7C120,53,240,43,360,32C480,21,600,11,720,42.7C840,75,960,149,1080,154.7C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  } else {
    const apiKey = "0577bd96999db21b7c2f3eef1b033562";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showCity);
    return <div>"Loading..."</div>;
  }
}
