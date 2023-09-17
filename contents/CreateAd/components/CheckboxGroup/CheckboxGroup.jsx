import classNames from "classnames/bind";

// styles
import styles from "./CheckboxGroup.module.scss";

const cx = classNames.bind(styles);

const CheckboxGroup = ({ children }) => {
  return <div className={cx("checkbox-group")}>{children}</div>;
};

export default CheckboxGroup;
