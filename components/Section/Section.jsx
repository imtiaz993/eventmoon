import React from "react";
import classNames from "classnames/bind";

import styles from "./Section.module.scss";
const cx = classNames.bind(styles);

const Section = ({ children, wrapperClass }) => {
  return <div className={cx("section-root", wrapperClass)}>{children}</div>;
};

export default Section;
