import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import ShimmerUI from "./components/ShimmerUI";


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

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet - Takes the children configuration */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",      // parentPath/{path} => localhost:1234/about/profile
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
]);

// createRoot takes the HTML element where we are going to run our React code
const root = ReactDOM.createRoot(document.getElementById("root"));

//render method with overwrite everything present inside the root element if present
root.render(<RouterProvider router={appRouter} />);