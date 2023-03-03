import RestaurantCard from './RestaurantCard.js';
import { restaurantList } from '../constants.js';
import { useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI.js';
import NoRestaurant from './NoRestaurant';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper.js';
import useInternetStatus from '../customHooks/useInternetStatus.js';


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

  const isOnline = useInternetStatus();

  if (!isOnline) return <h1>🔴 Offline, Please check your internet connection</h1>

  if (!allRestaurants) return null;

  return (allRestaurants.length === 0) ? <ShimmerUI /> : (
    <div className='body'>
      <div className='search-container'>
        <input type="text" className='search-input' placeholder='Search...' value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
          const data = (e.target.value === '')
            ? allRestaurants
            : filterData(e.target.value, allRestaurants);
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
              return (
                <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} className="link">
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          }
        </div>
      }
    </div>
  );
};

export default Body;