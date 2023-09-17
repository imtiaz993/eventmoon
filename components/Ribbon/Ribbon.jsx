import React from "react";
import classNames from "classnames/bind";

import styles from "./Ribbon.module.scss";
const cx = classNames.bind(styles);

const Ribbon = ({ wrapperClass, label, ...rest }) => {
  return (
    <div className={cx("ribbon-root", wrapperClass)} {...rest}>
      {label}
    </div>
  );
};

export default Ribbon;
