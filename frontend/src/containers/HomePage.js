import React from "react";
import Navbar from "../components/Navbar";
import Typography from '@mui/material/Typography';
import ExplanationCard from "../components/ExplanationCard";
import Button from '@mui/material/Button';

export default function HomePage() {
  const cardContents = [
    {
      title: "Track your favourite shows",
      content: "Add shows from all streaming services to your watchlist and keep track of your progress"
    },
    {
      title: "Get notified of new episodes",
      content: "Loved this show but the next season is not announced yet? Get an email it comes out"
    },
    {
      title: "See show recommendations",
      content: "Finished all your shows? Get recommendations for new shows based on your watchlist"
    }
  ]
  return (
    <div>
      <div className="w-100 pt-16 text-center mb-8">
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Welcome to BingeWatcher</Typography>
      </div>
      <div className="text-center mb-16">
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Track all your favourite shows</Typography>
      </div>
      <div className="text-center w-100 mb-16">
        <a href="/profile"><button className="bg-blue-500 hover:bg-blue-700 text-white font-light text-5xl py-4 px-10 rounded">Get started</button></a>
      </div>
      <div className="w-11/12 mx-auto flex justify-center">
        {cardContents.map((cardContent) => (
          <ExplanationCard title={cardContent.title} content={cardContent.content} />
        ))}
      </div>
    </div>
  );
}
