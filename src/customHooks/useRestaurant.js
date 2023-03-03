import { useState, useEffect } from "react";
import { REST_MENU_URL } from "../constants";

// This hook is used to get the menu of the restaurant whose resId is passed while calling this.
// This hook is called in RestaurantMenu.js file
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(REST_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json?.data)
  }

  return restaurant;
}

export default useRestaurant;