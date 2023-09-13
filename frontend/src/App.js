import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hocs/Layout";

import Activate from "./containers/Activate";
import AddShow from "./containers/AddShow";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Shows from "./containers/Shows";
import SignUp from "./containers/SignUp";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route exact path="/addshow" element={<AddShow />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/reset_password" element={<ResetPassword />} /> {/* only here for test */}
          <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route exact path="/shows" element={<Shows />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
