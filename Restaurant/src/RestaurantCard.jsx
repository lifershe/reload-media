import React from "react";
import "./App.css";

const RestaurantCard = ({ name }) => {
  return (
    <div className="card">
      <strong>{name}</strong>
    </div>
  );
};

export default RestaurantCard;
