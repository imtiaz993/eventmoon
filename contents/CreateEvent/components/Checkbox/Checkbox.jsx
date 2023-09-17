import classNames from "classnames/bind";

// styles
import styles from "./Checkbox.module.scss";

const cx = classNames.bind(styles);

const Checkbox = (props) => {
  return (
    <div className={cx("custom-checkbox")}>
      <input {...props} />
      <span className={cx("mark")}></span>
    </div>
  );
};

export default Checkbox;
