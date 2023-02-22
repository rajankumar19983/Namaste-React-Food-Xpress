import RestaurantCard from './RestaurantCard.js';
import { restaurantList } from '../constants.js';
import { useState } from 'react';

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchInput));
}

const Body = () => {

  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState();

  return (
    <div className='body'>
      <div className='search-container'>
        <input type="text" className='search-input' placeholder='Search...' value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
        }} />
        <button className='search-btn' onClick={() => {
          const data = filterData(searchInput, restaurants);
          setRestaurants(data);
        }
        }>Search</button>
      </div>
      <div className="restaurant-list">
        {
          restaurants.map(restaurant => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          })
        }
      </div>
    </div>
  );
};

export default Body;