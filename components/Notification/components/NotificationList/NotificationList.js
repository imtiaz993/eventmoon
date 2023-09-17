import React from "react";
import classNames from "classnames/bind";

// components
import List from "./List";

import styles from "./NotificationList.module.scss";
const cx = classNames.bind(styles);

const NotificationList = ({ data }) => {
  return (
    <div className={cx("notification-list-root")}>
      <List title="New" list={data.new} />
      <List title="Earlier" list={data.earlier} />
    </div>
  );
};

export default NotificationList;
