import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable - super powerful variable which can be used to store data and update the UI when the data changes. 
  // Whenever we update the state variable, 
  // React triggers a re-render of the component, allowing us to see the updated UI based on the new state. 
  // This makes it easy to create dynamic and interactive user interfaces that respond to user actions and data changes.
  const [RestaurantList, setRestaurantList] = useState([]);
  useEffect(( ) =>{
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9181997&lng=77.61852859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
    const jsonData = await data.json();
// Optional chaining
    const restaurantList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurantList);
    setFilteredRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  // Whenever state variable update, react triggers a re-render and the updated UI is displayed on the screen. 
  // This allows us to create dynamic and interactive user interfaces that respond to user actions and data changes.
const [searchText, setSearchText] = useState("");
const [filteredRestaurantList, setFilteredRestaurantList] = useState(RestaurantList); 
// Conditional rendering
  // if (RestaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return RestaurantList.length === 0 ? (
  <Shimmer /> ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Search for restaurants... " className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);           
          }}/>
          <button className="search-btn"
          onClick={()=>{
            const filteredList = RestaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurantList (filteredList);
          }}
          >Search</button>
        </div>
        <button className="res-btn" onClick={() =>{
          const filteredList= RestaurantList.filter((res) => res.info.avgRating > 4.5);
          setRestaurantList(filteredList);
        }}>Top rated restaurants </button>
      </div>
      <div className="res-container">
        {
            filteredRestaurantList.map((restaurant) => (
                <ResCard  key={restaurant?.info?.id} resData={restaurant} />
            ))
        }
      </div>
    </div>
  );
};
export default Body;



