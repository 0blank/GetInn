import React, { useEffect } from "react";
import { overrideThemeVariables, Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./assets/scss/base.scss";

function App() {
  useEffect(() => {
    overrideThemeVariables({
      "--light-bg": "#E9B7B9",
      "--light-bg-dark-shadow": "#ba9294",
      "--light-bg-light-shadow": "#ffdcde",
      "--dark-bg": "#292E35",
      "--dark-bg-dark-shadow": "#21252a",
      "--dark-bg-light-shadow": "#313740",
      "--primary": "#ac7c44",
      "--primary-dark": "#4526f9",
      "--primary-light": "#c7befd",
    });
  });
  return (
    <div className="App">
      <p>This is NepHotel App</p>
      <div style={{ margin: 20 }}>
        <Button>default</Button>
      </div>
      <div style={{ margin: 20 }}>
        <Button color="#ccc" bgColor="var(--primary)">
          colored
        </Button>
      </div>
      <div style={{ margin: 20 }}>
        <Button rounded>rounded</Button>
      </div>
    </div>
  );
}

export default App;
