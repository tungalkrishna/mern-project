import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* Banner Section */}
      <div className="banner">
        <h1>Tours & Travels</h1>
        <p>Explore the world with us</p>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Welcome to Tours and Travels</h2>
        <p>
          Discover breathtaking destinations, unforgettable adventures, and the 
          freedom of exploring the world. Whether you're seeking mountains, 
          beaches, cultural experiences, or peaceful escapes — we are here to 
          guide your journey. Travel makes you richer with memories, stories, 
          and moments you’ll cherish forever.
        </p>

        <p>
          Pack your bags and let’s embark on journeys filled with excitement, 
          wonder, and endless possibilities. Your next adventure begins here!
        </p>
      </div>

    </div>
  );
};

export default Home;
