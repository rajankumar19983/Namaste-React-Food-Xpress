import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"
import ShimmerUI from "./ShimmerUI.js"
import "../styles/RestaurantMenu.css"
import { AiFillStar } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci"
import { TfiGift } from "react-icons/Tfi"
import useRestaurant from "../customHooks/useRestaurant"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"


const RestaurantMenu = () => {

  // This fetched resId from the URL
  const { resId } = useParams()

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div className="restaurant-menu">
      {/* {console.log(restaurant)} */}
      <div className="restaurant-banner">
        <div className="restaurant-banner-left">
          <img
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt="restaurant-Menu-Image"
          />
        </div>
        <div className="restaurant-banner-center">
          <p className="restaurant-banner-name">{restaurant?.name}</p>
          <p className="restaurant-banner-cuisines">
            {restaurant?.cuisines.join(", ")}
          </p>
          <p className="restaurant-banner-location">
            {restaurant?.locality}, {restaurant?.area}
          </p>
          <div className="restaurant-banner-parameters">
            <div className="restaurant-banner-parameters-rating">
              <p className="parameret-1">
                <AiFillStar /> {restaurant?.avgRatingString}
              </p>
              <p className="parameret-2">{restaurant?.totalRatingsString}</p>
            </div>
            <div className="restaurant-banner-parameters-time">
              <p className="parameret-1">
                {restaurant.sla.slaString.toLowerCase()}
              </p>
              <p className="parameret-2">Delivery Time</p>
            </div>
            <div className="restaurant-banner-parameters-price">
              <p className="parameret-1">₹ {restaurant?.costForTwo / 100}</p>
              <p className="parameret-2">Cost for two</p>
            </div>
          </div>
        </div>
        <div className="restaurant-banner-right">
          <div className="offers">
            <span className="offers-heading">OFFER</span>
            <div className="offers-available">
              <div className="offer-row">
                <div className="offer-symbol">
                  {restaurant?.aggregatedDiscountInfo?.descriptionList[0]
                    ?.discountType === "Freebie" ? (
                    <TfiGift />
                  ) : (
                    <CiDiscount1 />
                  )}
                </div>
                <div>
                  <p>
                    {
                      restaurant?.aggregatedDiscountInfo?.descriptionList[0]
                        ?.meta
                    }
                  </p>
                </div>
              </div>
              <div className="offer-row">
                <div className="offer-symbol">
                  {restaurant?.aggregatedDiscountInfo?.descriptionList[1]
                    ?.discountType === "Freebie" ? (
                    <TfiGift />
                  ) : (
                    <CiDiscount1 />
                  )}
                </div>
                <div>
                  <p>
                    {
                      restaurant?.aggregatedDiscountInfo?.descriptionList[1]
                        ?.meta
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-all-menu">
        <div className="restaurant-widgets">
          <ul>
            {
              restaurant?.menu?.widgets.map((widget, index) => (
                <li key={index}>{widget?.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="restaurant-menu-items">
          {
            restaurant?.menu?.widgets.map((widget, index) => (
              <div key={index}>
                <h3 className="menu-category">{widget?.name}</h3>
                <p className="menu-category-length">{widget?.entities?.length} ITEMS</p>

                <div className="menu-items">
                  <div>
                    {/* <div className="menu-item-left"> */}
                    {widget?.entities?.map((entity, index) => (
                      // <h1>Hello{entity.id}</h1>
                      <div className="menu-item" key={index}>
                        <div>
                          <div >
                            {
                              Object.values(restaurant?.menu?.items).filter(item => (
                                item.id === entity.id
                              )).map((item, index) => (
                                <div className="menu-item-details" key={index}>
                                  <div className="menu-item-left" key={item?.name}>
                                    <h3 className="menu-item-name">{item?.name}</h3>
                                    <h4 className="menu-item-price">₹ {(item?.price) / 100}</h4>
                                    <p>{item?.description}</p>
                                  </div>
                                  <div className="menu-item-right">
                                    {
                                      item?.cloudinaryImageId && <img src={(IMG_CDN_URL + item?.cloudinaryImageId)}></img>
                                    }
                                    <button onClick={() => addFoodItem(item)}>Add +</button>
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                        <hr className="menu-item-devider" />
                      </div>
                    ))
                    }
                  </div>
                </div>
                <hr className="category-divider" />
              </div>
            ))
          }
        </div>
        <div className="restaurant-cart-section">

        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu