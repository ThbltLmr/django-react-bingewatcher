import React from "react";
import Navbar from "./Navbar";

export default function HomePage() {

  return (
    <div>
      <Navbar />
      <div className="homepage-banner text-center">
        <h1>Welcome to BingeWatcher</h1>
        <h3>Track your favorite shows and movies</h3>
      </div>
      <div className="homepage-explanation">
        <div className="explanation-card">

        </div>
      </div>
    </div>
  );
}
