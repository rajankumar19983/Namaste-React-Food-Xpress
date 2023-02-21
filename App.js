import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import logo from "./food-xpress-logo.png";
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/Ai';

const title = (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);


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

const Header = () => {
  return (
    <div className="header">
      <div className="header-elements">
        {title}
        <div className="nav-items">
          <ul>
            <li key="nav-1">Home</li>
            <li key="nav-2">About</li>
            <li key="nav-3">Contact</li>
            <li key="nav-4" id="cart"><FiShoppingCart />Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "631084",
      "name": "Wings & Samosas",
      "uuid": "04e6da48-b0a4-4108-9e49-3dc3d3e9e281",
      "city": "38",
      "area": "Labbipet",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "dyaxhqhhhlbdafl0m0ji",
      "cuisines": [
        "Snacks",
        "Indian",
        "Fast Food",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 1.100000023841858,
      "slugs": {
        "restaurant": "wings-&-samosas-governorpet-governorpet",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "D.NO.40-7-3, MOGHALRAJPURAM, VIJAYAWADA ,Vijayawada (Urban),N T R,Andhra Pradesh-520010",
      "locality": "Moghalrajpuram",
      "parentId": 377402,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5960241~p=1~eid=00000186-6e9e-fa9c-17e3-38da0099013c",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "631084",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 1.100000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "70500",
      "name": "Burger King",
      "uuid": "77a6def3-2be0-4884-a277-264b005a01a7",
      "city": "38",
      "area": "Christurajupuram",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "q95f1njeqnsh49htlfy1",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "burger-king-m-g-road-labbipet-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Unit No. 3F-4 , Third Floor, PVP Square, M G Road, Labbipet, Vijayawada, Andhra Pradesh 520010",
      "locality": "PVP Square mall",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "Get every item under 139",
        "shortDescriptionList": [
          {
            "meta": "Get every item under 139",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 139",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 139",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "70500",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "102488",
      "name": "7th Heaven",
      "uuid": "7ddc4f3d-9f23-408c-ab38-ddee1069af70",
      "city": "38",
      "area": "Christurajupuram",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ci7wdybeqc8zylydsb8t",
      "cuisines": [
        "Bakery",
        "Pizzas",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "7th-heaven-moghrajpuram-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "60-1-7/1, Chennupatiravamma Complex, Ground Floor, Sunnapubattilu Center, Siddhartha Nagar",
      "locality": "Siddhartha nagar",
      "parentId": 19,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "102488",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "505183",
      "name": "Samosa Singh",
      "uuid": "d15e5984-0946-4ebe-984e-a095d640466e",
      "city": "38",
      "area": "Governorpet",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "o2pnovdhs1lymdw85uvy",
      "cuisines": [
        "North Indian",
        "Indian",
        "Snacks",
        "Beverages"
      ],
      "tags": [

      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "samosa-singh-governorpet-governorpet",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Sri Raja Rajeshwari Complex, First floor, Door No 29-6- 23, Ramachandra Rao Raod, Suryarao pet, Vijayawada,, Vijayawada (Urban), Krishna, Andhra Pradesh - 520002",
      "locality": "Suryarao pet",
      "parentId": 5639,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5948916~p=19~eid=00000186-6e9e-fa9c-17e3-38e000991358",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "505183",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "70486",
      "name": "SSS Idly Center",
      "uuid": "fe754124-ddbd-434a-b9df-2e4b5b72eba6",
      "city": "38",
      "area": "Acharya Ranga Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "weufsah9zwqtyvmfecw1",
      "cuisines": [
        "South Indian"
      ],
      "tags": [

      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "sss-idly-center-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Municipal Employees Colony, Acharya Ranga Nagar",
      "locality": "Municipal Employees Colony",
      "parentId": 195196,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "70486",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "69085",
      "name": "The Shawarma Company",
      "uuid": "71e36294-a7ab-4cc7-94a8-d1c36ea0b39f",
      "city": "38",
      "area": "Labbipet",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "cpxtrrbfa11e0azl5muz",
      "cuisines": [
        "Lebanese",
        "Pizzas"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "the-shawarma-company-labbipet-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "40-6-27, Hotel Fortune Murali Park road , beside druken monkey",
      "locality": "Muralipark Road",
      "parentId": 5269,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "69085",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "309026",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "f328d0a5-5f8e-4857-ad63-8efadb6dce89",
      "city": "38",
      "area": "Patamata",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "jiylvgsbupc3gwxmk11k",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "tags": [

      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "kwality-walls-governorpet-governorpet",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Door No:74-12-4/2,Nethaji nagar,New RTC Colony,Patamata,Vijayawada-520010",
      "locality": "RTC Colony",
      "parentId": 582,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5958025~p=7~eid=00000186-6e9e-fa9c-17e3-38dc00990755",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "309026",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "234764",
      "name": "Basil Pizzeria",
      "uuid": "35cefdaf-5f75-4e72-bcca-9792f6e3eac5",
      "city": "38",
      "area": "Labbipet",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "tafpnzlxccris0rkuprf",
      "cuisines": [
        "Pizzas",
        "Burgers"
      ],
      "tags": [

      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "basil-pizzeria-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "60-4-8 Siddhartha Nagar 1st Line Poly Clinic Road Vijayawada",
      "locality": "Polyclinic Road",
      "parentId": 13448,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "234764",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "215510",
      "name": "Country Made Grills 'N' Fries",
      "uuid": "b84c8c23-1f19-4a43-85d1-ab31e781e19d",
      "city": "38",
      "area": "Machavaram",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ostiqj0nktaeuxqwpkmr",
      "cuisines": [
        "American"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "country-made-grills-'n'-fries-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar-2",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Tgiff,ward no.2, BRTS Rd, beside Model Dairy Outlet, Divine Nagar, Machavaram",
      "locality": "BRTS Road",
      "parentId": 13462,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5960234~p=22~eid=00000186-6e9e-fa9c-17e3-38e10099161e",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "215510",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "72164",
      "name": "Pizza Hut",
      "uuid": "293a6817-ac4f-45f8-afac-b5e4b4044e05",
      "city": "38",
      "area": "Labbipet",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "kfcxdwdscax9nug0vsax",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [

      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "pizza-hut-labbipet-governorpet",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Pizza Hut 39 & 1, SN 3f & 1 & 3,PVP Square Mall, Level 3, Mg Rd, Labbipet, Krishna, Andhra Pradesh 520010.",
      "locality": "PVP Square mall",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "72164",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "236572",
      "name": "Srinivasa Fast Foods",
      "uuid": "c79c4c2e-6b48-4728-a9e7-ec3f630864d8",
      "city": "38",
      "area": "Labbipet",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "uxh321ykb0tqkexpgcgr",
      "cuisines": [
        "Chinese",
        "South Indian"
      ],
      "tags": [

      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "srinivasa-fast-foods-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "D No 21-10/5-55,Teachers colony 3rd line,Muthyalampadu.Vijayawada 520011",
      "locality": "Teachers Colony",
      "parentId": 194940,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "236572",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "314601",
      "name": "Anjaneya Family Restaurants Veg & Nonveg",
      "uuid": "46acb87a-a584-496b-86ea-d32883abb924",
      "city": "38",
      "area": "Auto Nagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "bab9zjgjvsjheorqk0ms",
      "cuisines": [
        "Biryani",
        "Thalis",
        "Chinese",
        "Tandoor",
        "North Indian",
        "Seafood"
      ],
      "tags": [

      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "sapthagiri-mess-governorpet-governorpet",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "\"MG ROAD, PATAMATA, near DONKA ROAD, Vijayawada",
      "locality": "Mg Road",
      "parentId": 22337,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5960246~p=13~eid=00000186-6e9e-fa9c-17e3-38de00990d63",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "314601",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.5",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "71320",
      "name": "McDonald's",
      "uuid": "c7df32c5-1899-4b69-a1a1-25e5908ccfef",
      "city": "38",
      "area": "Auto Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "a67415c0b9d0815b44820c1083f4531a",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "mcdonalds-vijaywada-inner-ring-road-governorpet",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants Pvt Ltd, Vijayawada - Inner Ring Road, R, S.No. 132-2B, Door No. 59A-1-1, New P & T Colony No. 2, Patamata,Vijaya, Krishna District, Inner",
      "locality": "P & T Colony",
      "parentId": 630,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "71320",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "444488",
      "name": "Al-Baik",
      "uuid": "e30d56bd-9859-4bc3-a826-139f4d6e50bf",
      "city": "38",
      "area": "Christurajupuram",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "pevd6zujlssrtil1jfuo",
      "cuisines": [
        "Beverages",
        "Snacks"
      ],
      "tags": [

      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "al-baik-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "Chennupati Ravamma Complex, Sunnapubhattilu Center, Siddhartha Nagar,, Vijayawada (Urban), Krishna, Andhra Pradesh - 520010",
      "locality": "Siddhartha nagar",
      "parentId": 29746,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "444488",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "630011",
      "name": "Pizza World",
      "uuid": "21743259-97c2-467f-85ef-f23b8d34bac2",
      "city": "38",
      "area": "Ramavarappadu",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "kbhkklikxbxdtrxciodn",
      "cuisines": [
        "Indian",
        "Pizzas",
        "Burgers"
      ],
      "tags": [

      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 3.700000047683716,
      "slugs": {
        "restaurant": "pizza-world-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
        "city": "vijayawada"
      },
      "cityState": "38",
      "address": "48-10-12/B, service road, currency nagar, vijayawada, krishna,andhra pradesh-520008",
      "locality": "Currency Nagar\n",
      "parentId": 9468,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [

      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [

      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5960220~p=16~eid=00000186-6e9e-fa9c-17e3-38df00991058",
      "badges": {
        "imageBased": [

        ],
        "textBased": [

        ],
        "textExtendedBadges": [

        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "630011",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  }
];

const RestaurantCard = ({ name, cuisines, area, cloudinaryImageId, costForTwoString, lastMileTravelString, avgRating }) => {
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <p id="rest-name">{name}</p>
      <p id="cuisines">{cuisines.join(", ")}</p>
      <p id="area">{area}</p>
      <div>
        <p id="rating"><span id="span1">{avgRating}</span><span id="span2"><AiFillStar /></span></p>
        <span>•</span>
        <p>{lastMileTravelString}</p>
        <span>•</span>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map(restaurant => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        })
      }
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>All rights reserved @ <a href="https://github.com/rajankumar19983">Rajan Choudhary</a></h4>
    </div>
  );
};

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