
import { CDN_URL } from "../utilis/constants";

const ResCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        sla: { deliveryTime },
        cloudinaryImageId,
    } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};
export default ResCard;