import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action to add item to cart
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {item.map((i) => (
          <div
            key={i.card.info.id}
            className="border-b border-gray-200 p-2 m-2 text-left flex justify-between"
          >
            <div className="w-10/12">
              <div className="py-2">
                <span>{i.card.info.name} </span>
                <span>
                  - ₹{(i.card.info.price ?? i.card.info.defaultPrice) / 100}
                </span>
              </div>
              <p className="text-xs ">{i.card.info.description}</p>
            </div>
            <div className="w-2/12 p-1">
              <div className="absolute w-full">
                <button
                  className="p-2 mx-11 my-10 bg-black text-white shadow-lg absolute text-sm rounded-lg"
                  onClick={() => handleAddItem(i.card.info)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + i.card.info.imageId}
                className="w-full "
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
