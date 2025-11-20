import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              restaurantList.filter((res) => res.rating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          //not using keys (not acceptable) <<<<<< index as key <<<<<<<<<<< unique id(manually) (best practice)
          <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
