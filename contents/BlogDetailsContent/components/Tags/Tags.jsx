import classNames from "classnames/bind";

import styles from "./Tags.module.scss";

const tags = ["Diwali Festival", "Live Music", "Events in India", "Holy"];

const cx = classNames.bind(styles);

const Tags = () => {
  return (
    <div className={cx("tag-wrapper")}>
      <p>Blogs Tags</p>
      <div>
        {tags.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
