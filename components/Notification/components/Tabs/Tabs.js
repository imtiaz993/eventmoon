import React from "react";
import classNames from "classnames/bind";

import styles from "./Tabs.module.scss";
const cx = classNames.bind(styles);

const Tabs = ({ index, setIndex }) => {
  return (
    <div className={cx("tabs-root")}>
      <button
        className={cx({ active: index === 1 })}
        onClick={() => setIndex(1)}
      >
        Following
      </button>
      <button
        className={cx({ active: index === 2 })}
        onClick={() => setIndex(2)}
      >
        Notifications
      </button>
      <span className={cx("indicator", { toLeft: index === 2 })}></span>
    </div>
  );
};

export default Tabs;
