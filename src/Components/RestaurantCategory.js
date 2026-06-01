const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="category-container">
      <div className="category-header" onClick={setShowIndex}>
        <span>
          {data.title} ({data.itemCards?.length})
        </span>

        <span>{showItems ? "▲" : "▼"}</span>
      </div>

      {showItems &&
        data.itemCards?.map((item) => {
          const info = item?.card?.info;

          return (
            <div className="menu-card" key={info?.id}>
              <div className="menu-left">
                <h3>{info?.name}</h3>

                <p className="item-price">
                  ₹{(info?.defaultPrice || info?.price) / 100}
                </p>

                <p className="rating">
                  ⭐ {info?.ratings?.aggregatedRating?.rating || "4.0"}
                </p>

                <p className="description">
                  {info?.description?.slice(0, 140)}...
                </p>
              </div>

              <div className="menu-right">
                {info?.imageId && (
                  <img
                    className="food-image"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      info.imageId
                    }
                    alt={info.name}
                  />
                )}

                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantCategory;
