import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  useEffect(( ) =>{
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9181997&lng=77.61852859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
    const jsonData = await data.json();
// Optional chaining
    const restaurantList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurantList);
  };
// Conditional rendering
  // if (RestaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return RestaurantList.length === 0 ? (
  <Shimmer /> ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Search for restaurants..." />
          <button className="search-btn">Search</button>
        </div>
        <button className="res-btn" onClick={() =>{
          const filteredList= RestaurantList.filter((res) => res.info.avgRating > 4.5);
          setRestaurantList(filteredList);
        }}>Top rated restaurants </button>
      </div>
      <div className="res-container">
        {
            RestaurantList.map((restaurant) => (
                <ResCard  key={restaurant?.info?.id} resData={restaurant} />
            ))
        }
      </div>
    </div>
  );
};
export default Body;



