import { Rating } from "components";

const RatingComponent = ({
  rate = 0,
  ratingsCount = Math.round(rate),
  className = "",
  labelClassName = "",
}) => {
  return (
    <div className={className}>
      <Rating rate={parseFloat(rate).toFixed()} />
      <span className={labelClassName}> ({ratingsCount})</span>
    </div>
  );
};

export default RatingComponent;
