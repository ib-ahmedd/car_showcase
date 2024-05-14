import { Hero } from "@components";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Cartalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
