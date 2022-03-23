import React from "react";
import logo from "./assets/logo.svg";
import "./assets/App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    // This is the parent element, which there must be one of
    <div className="App">
      <header className="AppHeader"></header>
      <div className="LeftColumn"></div>
      <div className="RightColumn">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
