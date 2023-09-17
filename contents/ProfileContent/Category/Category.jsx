import classNames from "classnames/bind";

// styles
import styles from "./Category.module.scss";
const cx = classNames.bind(styles);

const Category = () => {
  return (
    <div className={cx("category-wrapper")}>
      <h1>Categories I promote</h1>
      <div className={cx("list")}>
        <span className={cx("tag")}>Online Events</span>
        <span className={cx("tag")}>Dancing Events</span>
        <span className={cx("tag")}>Live Music Concert Events</span>
        <span className={cx("tag", "bg")}>Add</span>
      </div>
    </div>
  );
};

export default Category;
