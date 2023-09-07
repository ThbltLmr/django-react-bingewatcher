import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Profile";
import Shows from "./Shows";
import AddShow from "./AddShow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/shows" element={<Shows />} />
        <Route exact path="/addshow" element={<AddShow />} />
      </Routes>
    </BrowserRouter>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
