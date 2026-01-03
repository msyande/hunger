import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title + " (" + data.itemCards.length + ")"}
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordian */}
      {showItems && <ItemList item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
