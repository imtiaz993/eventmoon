import React from "react";
import classNames from "classnames/bind";

// components
import { Error } from "components";

import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

const Input = ({
  Prefix,
  Suffix,
  label,
  error,
  id,
  inputEl: InputEl = "input",
  defaultPadding,
  wrapperClass,
  prefixClass,
  suffixClass,
  inputWrapperClass,
  inputClass,
  errorClass,
  ...rest
}) => {
  return (
    <div className={cx("input-root", wrapperClass)}>
      {label && (
        <label htmlFor={id}>
          <span className={cx("label")}>{label}</span>
        </label>
      )}
      <div
        className={cx("wrapper", inputWrapperClass, {
          "default-padding": defaultPadding,
        })}
      >
        {Prefix && (
          <span className={cx("icon-wrapper", prefixClass)}>{Prefix}</span>
        )}
        <InputEl className={cx("input", inputClass)} {...rest} id={id} />
        {Suffix && (
          <span className={cx("icon-wrapper", suffixClass)}>{Suffix}</span>
        )}
      </div>
      <Error wrapperClass={cx(errorClass)} error={error} />
    </div>
  );
};

export default Input;
