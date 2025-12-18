import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
    );
    const json = await data.json();

    //optional chaining
    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
          <Link
            to={"/restaurant/" + restaurant?.info.id}
            key={restaurant?.info.id}
          >
            <RestaurantCard restaurantData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
