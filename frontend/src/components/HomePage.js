import React from "react";
import Navbar from "./Navbar";

export default function HomePage() {

  return (
    <div>
      <Navbar />
      <div className="w-100 pt-16 text-center">
        <h1 className="text-8xl font-light mb-8">Welcome to BingeWatcher</h1>
        <h3 className="text-5xl font-light mb-8">Track your favorite shows and movies</h3>
      </div>
      <div className="homepage-explanation">
        <div className="explanation-card">

        </div>
      </div>
    </div>
  );
}
