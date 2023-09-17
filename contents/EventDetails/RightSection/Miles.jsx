//icons
import { GrSend } from "react-icons/gr";

//components
import Skeleton from "react-loading-skeleton";

const Miles = ({ data, cx }) => {
  return data?.DistanceMile ? (
    <div className={cx("miles")}>
      <GrSend className={cx("icon")} />{" "}
      <span>{data?.DistanceMile} miles away</span>
    </div>
  ) : (
    <Skeleton />
  );
};

export default Miles;
