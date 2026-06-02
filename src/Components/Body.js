import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RestaurantList } from "../utilis/constants";
import useOnlineStatus from "../utilis/UseOnineStatus";

const Body = () => {
  // local state variable - super powerful variable which can be used to store data and update the UI when the data changes.
  // Whenever we update the state variable,
  // React triggers a re-render of the component, allowing us to see the updated UI based on the new state.
  // This makes it easy to create dynamic and interactive user interfaces that respond to user actions and data changes.
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RestaurantList);
    const jsonData = await data.json();
    // console.log(jsonData);
    // console.log(jsonData?.data?.cards);

    // Optional chaining
    // this is before more restaturants are added to the API
    // const restaurantList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // setRestaurantList(restaurantList);
    // setFilteredRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // const restaurantList = jsonData?.data?.cards?.find(
    //   (x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    // )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const restaurantList = jsonData?.data?.cards
    //   ?.filter((x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //   ?.flatMap((x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(restaurantList.length);
    // setRestaurantList(restaurantList);
    // setFilteredRestaurantList(restaurantList);
    // console.log(restaurantList);
    const restaurantList =
      jsonData?.data?.cards
        ?.filter((x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        ?.flatMap(
          (x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        ) || [];
    const uniqueRestaurants = Array.from(
      new Map(
        restaurantList.map((restaurant) => [restaurant.info.id, restaurant]),
      ).values(),
    );
    console.log("Original:", restaurantList.length);
    console.log("Unique:", uniqueRestaurants.length);
    setRestaurantList(uniqueRestaurants);
    setFilteredRestaurantList(uniqueRestaurants);
  };

  // Whenever state variable update, react triggers a re-render and the updated UI is displayed on the screen.
  // This allows us to create dynamic and interactive user interfaces that respond to user actions and data changes.
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <div className="offline-card">
          <div className="offline-icon">📡</div>

          <h1>Can't Serve Food Right Now</h1>
          <p>
            We need an internet connection to fetch delicious restaurants for
            you.
          </p>

          <button
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  // Conditional rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for restaurants... "
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const filteredList = restaurantList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );
                setFilteredRestaurantList(filteredList);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="res-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.2,
            );
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top rated restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
