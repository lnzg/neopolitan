import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import icon from "./icon.png";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  // date and time
  let now = new Date();

  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = day[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // end date and time

  // Weather info
  function showCity(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      day: currentDay,
      time: `${hour}:${minutes}`,
      icon: response.data.weather[0].icon,
    });
  }
  // end Weather info

  // Search for City
  function search() {
    const apiKey = "0577bd96999db21b7c2f3eef1b033562";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  // end Search for City

  function geolocation(position) {
    navigator.geolocation.getCurrentPosition(accessPosition);
  }

  function accessPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "0577bd96999db21b7c2f3eef1b033562";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showCity);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container search">
          <form onSubmit={handleSubmit}>
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
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2">
                <input type="submit" className="form-control go" value="go" />
              </div>
              <div className="col-2">
                <button className="geolocation">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    onClick={geolocation}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>"Loading..."</div>;
  }
}
