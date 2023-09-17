import React from "react";
import classNames from "classnames/bind";

import styles from "./Banner.module.scss";
const cx = classNames.bind(styles);

// TODO - add keyframe animation move text in loop to Right.

const Banner = ({ content }) => {
  return (
    <div className={cx("banner-root")}>
      <p>{content}</p>
    </div>
  );
};

export default Banner;
