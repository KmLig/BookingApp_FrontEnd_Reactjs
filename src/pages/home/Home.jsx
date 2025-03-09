import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/hotels");
  }
  return (
    <section className="home">
      <div className="home__container">
        <h1 className="home__title">Welcome to Booking App</h1>
        <p className="home__description">
          Find and book the best hotels for your stay.
        </p>
         <button className="home__button" onClick={handleExploreClick}>Explore Hotels</button>
      </div>
    </section>
  );
};

export default Home;
