import React from "react";
import classNames from "classnames/bind";

import Item from "./Item";

import styles from "./FollowingList.module.scss";
const cx = classNames.bind(styles);

const FollowingList = ({ list }) => {
  return (
    <div className={cx("following-list-root")}>
      {/* <ul>
        {list.map((item, i) => (
          <Item key={i} data={item} />
        ))}
      </ul> */}
    </div>
  );
};

export default FollowingList;
