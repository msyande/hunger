import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + restaurantData.image} />
      <h3>{restaurantData.resName}</h3>
      <h4>{restaurantData.cuisine.join(",")}</h4>
      <h4>⭐️ {restaurantData.rating}</h4>
      <h4>{restaurantData.time}</h4>
    </div>
  );
};
export default RestaurantCard;
