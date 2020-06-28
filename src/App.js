import React from "react";
import "./App.css";
import TopBar from "./TopBar";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Weather />
      <Forecast />
      <footer>
        <p>neapolitan weather app</p>
        <p>open source • coded by lin</p>
      </footer>
    </div>
  );
}

export default App;
