import classNames from "classnames/bind";

// styles
import styles from "./DetailsSection.module.scss";

const cx = classNames.bind(styles);

const AdSection = () => {
  return <div className={cx("ad__wrapper")}></div>;
};

export default AdSection;
