import classNames from "classnames/bind";

// components
import Image from "next/image";

import styles from "./FollowingList.module.scss";
const cx = classNames.bind(styles);

const Item = ({ data }) => {
  return (
    <li className={cx("item")}>
      <div className={cx("left-section")}>
        <Image src={data.image} alt="..." />
        <span>{data.name}</span>
      </div>
      <div className={cx("right-section")}>
        <button className={cx("unfollow")}>Unfollow</button>
        <button className={cx("follow")}>Following</button>
      </div>
    </li>
  );
};

export default Item;
