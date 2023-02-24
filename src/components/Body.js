import RestaurantCard from './RestaurantCard.js';
import { restaurantList } from '../constants.js';
import { useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI.js';
import NoRestaurant from './NoRestaurant';


function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()));
}

const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.50440286590411&lng=77.06517409533264&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) { return <NoRestaurant /> };

  // return (allRestaurants.length === 0) ? <ShimmerUI /> : (filteredRestaurants?.length === 0) ? <NoRestaurant /> : (
  return (allRestaurants.length === 0) ? <ShimmerUI /> : (
    <div className='body'>
      <div className='search-container'>
        <input type="text" className='search-input' placeholder='Search...' value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
          const data = (e.target.value === '') ? allRestaurants : filterData(e.target.value, allRestaurants);
          setFilteredRestaurants(data);
        }} />
        <button className='search-btn' onClick={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }
        }>Search</button>
      </div>
      {(filteredRestaurants?.length === 0) ? <NoRestaurant /> :
        <div className="restaurant-list">
          {
            filteredRestaurants.map(restaurant => {
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
          }
        </div>
      }
    </div>
  );
};

export default Body;