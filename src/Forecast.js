import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="container beige">
      <div className="three-day">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <p className="day">tomorrow</p>
              </li>
              <li>
                <img
                  src="https://static.thenounproject.com/png/39152-200.png"
                  alt="weather icon"
                  className="small-icon"
                />
              </li>
              <li>
                <p className="small-temp">30/57°</p>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <p id="day-two" className="day">
                  monday
                </p>
              </li>
              <li>
                <img
                  src="https://static.thenounproject.com/png/39152-200.png"
                  alt="weather icon"
                  className="small-icon"
                />
              </li>
              <li>
                <p className="small-temp">50/68°</p>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <p className="day">tuesday</p>
              </li>
              <li>
                <img
                  src="https://static.thenounproject.com/png/39152-200.png"
                  alt="weather-icon"
                  className="small-icon"
                />
              </li>
              <li>
                <p className="small-temp">45/60°</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
