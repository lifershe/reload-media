import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://reload-media-server-nh2d01dfn-lifershe.vercel.app/"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // filter restaurants by state
  const organizedRestaurants = restaurants.reduce((accumulator, restaurant) => {
    const state = restaurant.state;
    if (!accumulator[state]) {
      accumulator[state] = [];
    }
    accumulator[state].push(restaurant);
    return accumulator;
  }, {});

  return (
    <div className="wrapper">
      <h1>RESTAURANT FILTERED BY STATE</h1>
      {Object.keys(organizedRestaurants).map((state) => (
        <div className="container" key={state}>
          <h2>{state}</h2>
          <div className="cardContainer">
            {organizedRestaurants[state].map((restaurant) => (
              <RestaurantCard
                key={restaurant.restaurant_name}
                name={restaurant.restaurant_name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
