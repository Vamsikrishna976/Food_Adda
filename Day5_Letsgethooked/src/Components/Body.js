import ResCard from "./ResCard";
import reslist from "../utilis/data";
import { useState } from "react";
import reslist from "../utilis/data";


const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(reslist);
  return (
    <div className="Body">
      <div className="filter">
        <button className="res-btn" onClick={() =>{
          const filteredList= RestaurantList.filter((res) => res.data.avgRating > 4.5);
          setRestaurantList(filteredList);
        }}>Top rated restaurants </button>
      </div>
      <div className="res-container">
        {
            RestaurantList.map((restaurant) => (
                <ResCard  key={restaurant.data.id} resData={restaurant} />
            ))
        }
      </div>
    </div>
  );
};
export default Body;