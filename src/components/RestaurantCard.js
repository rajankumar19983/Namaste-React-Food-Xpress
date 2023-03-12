import { IMG_CDN_URL } from "../constants";
import { AiFillStar } from 'react-icons/ai';
import "../styles/RestaurantCard.css";

const RestaurantCard = ({ name, cuisines, area, cloudinaryImageId, costForTwoString, lastMileTravelString, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <p id="rest-name">{name}</p>
      <p id="cuisines">{cuisines.join(", ")}</p>
      <p id="area">{area}</p>
      <div>
        <p
          id="rating"
          style={
            avgRating >= 4
              ? { backgroundColor: "green" }
              : avgRating == '--'
                ? { backgroundColor: "gray" }
                : { backgroundColor: "orange" }
          }>
          <span id="span1">{avgRating}</span>
          <span id="span2"><AiFillStar /></span>
        </p>
        <span>•</span>
        <p>{lastMileTravelString}</p>
        <span>•</span>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard