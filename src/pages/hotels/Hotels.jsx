import React from "react";
import { Link } from "react-router-dom";
import hotels from "../../data/hotels";
import "./Hotels.css";

const Hotels = () => {
  return (
    <div className="container">
      <h1>Hotels</h1>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>{hotel.price}</p>
            <p>⭐ {hotel.rating}</p>
            <Link to={`/hotels/${hotel.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Hotels;
