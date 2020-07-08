import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon.js";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);

    setLoaded(true);
  }

  // set date
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

  let dayOneValue = now.getDay() + 1;
  if (dayOneValue === 8) {
    dayOneValue = "Monday";
  } else if (dayOneValue === 7) {
    dayOneValue = "Sunday";
  } else {
    dayOneValue = day[now.getDay() + 1];
  }

  let dayTwoValue = now.getDay() + 2;
  if (dayTwoValue === 8) {
    dayTwoValue = "Monday";
  } else if (dayTwoValue === 7) {
    dayTwoValue = "Sunday";
  } else {
    dayTwoValue = day[now.getDay() + 2];
  }

  let dayThreeValue = now.getDay() + 3;
  if (dayThreeValue === 8) {
    dayThreeValue = "Monday";
  } else if (dayThreeValue === 7) {
    dayThreeValue = "Sunday";
  } else {
    dayThreeValue = day[now.getDay() + 3];
  }

  // end set date

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="container beige">
        <div className="three-day">
          <div className="row">
            <div className="col-4">
              <ul>
                <li>
                  <p className="day">{dayOneValue}</p>
                </li>
                <li>
                  <WeatherIcon code={forecast.list[0].weather[0].icon} />
                </li>
                <li>
                  <p className="small-temp">
                    {Math.round(forecast.list[0].main.temp)}°
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <p id="day-two" className="day">
                    {dayTwoValue}
                  </p>
                </li>
                <li>
                  <WeatherIcon code={forecast.list[1].weather[0].icon} />
                </li>
                <li>
                  <p className="small-temp">
                    {Math.round(forecast.list[1].main.temp)}°
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <p className="day">{dayThreeValue}</p>
                </li>
                <li>
                  <WeatherIcon code={forecast.list[2].weather[0].icon} />
                </li>
                <li>
                  <p className="small-temp">
                    {Math.round(forecast.list[2].main.temp)}°
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0577bd96999db21b7c2f3eef1b033562";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
    return <div className="container beige"></div>;
  }
}
