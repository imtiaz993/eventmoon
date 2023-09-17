import classNames from "classnames/bind";

// styles
import styles from "./Switch.module.scss";

const cx = classNames.bind(styles);

const Switch = ({ wrapperClass, id, value, ...rest }) => {
  return (
    <label htmlFor={id} className={cx("switch-root", { off: !value })}>
      <input className={cx("checkbox")} type="checkbox" id={id} {...rest} />
      <span className={cx("thumb")}></span>
    </label>
  );
};

export default Switch;
