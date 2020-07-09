import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        <p>neapolitan weather app</p>
        <p>
          <a
            href="https://github.com/lnzg/neopolitan"
            target="_blank"
            className="open-source"
            rel="noopener noreferrer"
          >
            open source
          </a>{" "}
          • coded by{" "}
          <a
            href="https://www.instagram.com/linlearnscode"
            target="_blank"
            className="open-source"
            rel="noopener noreferrer"
          >
            lin
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
