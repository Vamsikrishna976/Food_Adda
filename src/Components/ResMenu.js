import React, { use } from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilis/constants";
import {useParams} from "react-router-dom";

const ResMenu = () => {
  const [resInfo, setResInfo] = React.useState(null);
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  // const restaurantId = 123; // Replace with actual restaurant ID
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setMenuData(jsonData);
    const menuInfo = jsonData?.data?.cards[2]?.card?.card?.info;
    setResInfo(menuInfo);
    console.log(jsonData);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
  } = resInfo;

  const itemCards =
    menuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.itemCards;

  return (
    <div className="res-menu">
      <div className="restaurant-details">
        <h1 className="res-name">{name}</h1>

        <div className="res-card">
          <h3>
            ⭐ 4.1 ({totalRatingsString}) • {costForTwoMessage}
          </h3>

          <p className="cuisine">{cuisines.join(", ")}</p>

          <div className="outlet">
            <span>Outlet</span> Maruti Nagar
          </div>

          <h4>35-40 mins</h4>
        </div>
      </div>

      <div className="menu-list">
        {itemCards?.map((item) => {
          const info = item?.card?.info;

          return (
            <div className="menu-card" key={info?.id}>
              <div className="menu-left">
                <h2>{info?.name}</h2>

                <h3>₹{(info?.defaultPrice || info?.price) / 100}</h3>

                <p className="rating">
                  ⭐ {info?.ratings?.aggregatedRating?.rating}
                </p>

                <p className="description">{info?.description}</p>
              </div>

              <div className="menu-right">
                <img
                  className="food-image"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    info?.imageId
                  }
                  alt={info?.name}
                />

                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
