import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farn");

  function convertToCel(event) {
    event.preventDefault();
    setUnit("cel");
  }

  function showFarn(event) {
    event.preventDefault();
    setUnit("farn");
  }

  if (unit === "farn") {
    return (
      <span>
        <span className="temp">{props.farn}°</span>{" "}
        <span className="metric">
          <a href="/" onClick={convertToCel} className="metric-link">
            C
          </a>{" "}
          | F
        </span>{" "}
      </span>
    );
  } else {
    let cel = (props.farn - 32) * (5 / 9);
    return (
      <span>
        <span className="temp">{Math.round(cel)}°</span>{" "}
        <span className="metric">
          C |{" "}
          <a href="/" onClick={showFarn} className="metric-link">
            F
          </a>
        </span>{" "}
      </span>
    );
  }
}
