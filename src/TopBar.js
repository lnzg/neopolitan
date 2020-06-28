import React from "react";
import "./TopBar.css";
import icon from "./icon.png";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar() {
  return (
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
  );
}
