import React from "react";
import { Link, useParams } from "react-router-dom";
import hotels from "../../data/hotels";
import "./HotelDetail.css"

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <h2>Hotel not found!</h2>;
  }

  return (
    <div className="hotel-detail">
      <img src={hotel.image} alt={hotel.name} />
      <h1>{hotel.name}</h1>
      <p className="location">📍 {hotel.location}</p>
      <p className="price">💰 {hotel.price}</p>
      <p className="rating">⭐ {hotel.rating}</p>
      <Link to="/hotels" className="back-link">← Back to Hotels</Link>
    </div>
  );
};

export default HotelDetail;
