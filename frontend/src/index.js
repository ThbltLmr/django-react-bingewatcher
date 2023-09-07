import App from "./components/App.js";
import React, { Component } from "react";
import { render } from "react-dom";
import '../static/css/index.css'

const appDiv = document.getElementById("app");
render(<App />, appDiv);
