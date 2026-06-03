// 


import React, { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useResMenu from "../utilis/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const menuData = useResMenu(resId);

  // null = all categories closed
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = menuData?.data?.cards?.find(
    (x) => x?.card?.card?.info
  )?.card?.card?.info;

  if (menuData === null) {
    return <Shimmer />;
  }

  if (!resInfo) {
    return (
      <div className="restaurant-error">
        <div className="error-card">
          <div className="error-icon">🍽️</div>

          <h1>Restaurant Unavailable</h1>

          <p>
            We couldn't load the restaurant details at the moment.
            Please check your connection or try again later.
          </p>

          <button
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
    sla,
  } = resInfo;

  const regularCards = menuData?.data?.cards?.find(
    (x) => x?.groupedCard?.cardGroupMap?.REGULAR?.cards
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = regularCards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="res-menu">
      {/* Restaurant Details */}
      <div className="restaurant-details">
        <h1 className="res-name">{name}</h1>

        <div className="res-summary">
          <h3>
            ⭐ {avgRating} ({totalRatingsString}) •{" "}
            {costForTwoMessage}
          </h3>

          <p className="cuisine">
            {cuisines?.join(", ")}
          </p>

          <h4>{sla?.slaString}</h4>
        </div>
      </div>

      {/* Categories */}
      <div className="menu-list">
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(
                index === showIndex ? null : index
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;