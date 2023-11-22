import React, { useState, useEffect } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://nextjs-orpin-omega-98.vercel.app/api/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>
            <strong>{restaurant.restaurant_name}</strong> - {restaurant.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
