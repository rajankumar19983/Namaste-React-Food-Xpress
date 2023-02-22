import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


/*
Header
  -Logo (Title)
  -Nav Items (Right Side)
  -Cart
Body
  -Search Bar
  -RestaurantList
    -RestaurantCard
      -Image
      -Name
      -Rating
      -Cusines
Footer
  -links
  -Copyright
*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// createRoot takes the HTML element where we are going to run our React code
const root = ReactDOM.createRoot(document.getElementById("root"));

//render method with overwrite everything present inside the root element if present
root.render(<AppLayout />);