import classNames from "classnames/bind";

// styles
import styles from "./TwoColumns.module.scss";

const cx = classNames.bind(styles);

const TwoColumns = ({ children }) => {
  return <div className={cx("cols-2")}>{children}</div>;
};

export default TwoColumns;
