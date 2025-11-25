import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local Stste variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [initialListOfRestaurants, setInitialListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4055741&lng=72.8557411&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards);

    //optional chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setInitialListOfRestaurants(restaurants);
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="serch-box"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const filteredRes = initialListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res?.info.avgRating > 4.4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          //not using keys (not acceptable) <<<<<< index as key <<<<<<<<<<< unique id(manually) (best practice)
          <RestaurantCard
            key={restaurant?.info.id}
            restaurantData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
