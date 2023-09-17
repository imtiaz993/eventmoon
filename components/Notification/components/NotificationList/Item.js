import classNames from "classnames/bind";

// components
import Image from "next/image";

import styles from "./NotificationList.module.scss";
const cx = classNames.bind(styles);

const Item = ({ data }) => {
  return (
    <li className={cx("item")}>
      <div className={cx("img-wrapper")}>
        <Image src={data.image} alt="..." objectFit="cover" layout="fill" />
      </div>
      <p>
        <span>{data.overview}</span>{" "}
        <span className={cx("action")}>{data.action}</span>
      </p>
      <div className={cx("time")}>
        <span>{data.time}</span>
        <span className={cx({ hidden: !data.isFollow })}>Following</span>
      </div>
    </li>
  );
};

export default Item;
