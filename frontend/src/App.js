import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./containers/HomePage";
import Profile from "./containers/Profile";
import Shows from "./containers/Shows";
import AddShow from "./containers/AddShow";

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
