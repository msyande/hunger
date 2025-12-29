import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurantData;

  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-100 rounded-lg hover:bg-gray-400 cursor-pointer">
      <img
        className="rounded-lg h-[200px] w-full"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>⭐️ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
