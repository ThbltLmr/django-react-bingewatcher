import React, { Component } from "react";
import { render } from "react-dom";

export default function App() {
  return (
    <div>
      <h1>React Django</h1>
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
