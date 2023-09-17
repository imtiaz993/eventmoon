import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

const Button = ({
  wrapperClass,
  Prefix,
  Suffix,
  prefixClass,
  suffixClass,
  label,
  labelClass,
  ...rest
}) => {
  return (
    <button className={cx("button-root", wrapperClass)} {...rest}>
      {Prefix && <span className={cx("icon-wrapper", prefixClass)}>{Prefix}</span>}
      {label && <span className={cx("label", labelClass)}>{label}</span>}
      {Suffix && <span className={cx("icon-wrapper", suffixClass)}>{Suffix}</span>}
    </button>
  );
};

export default Button;
