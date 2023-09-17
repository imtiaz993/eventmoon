import classNames from "classnames/bind";

// styles
import styles from "./Error.module.scss";

const cx = classNames.bind(styles);

const Error = ({ error, wrapperClass }) => {
  return (
    error && <span className={cx("error-root", wrapperClass)}>{error}</span>
  );
};

export default Error;
