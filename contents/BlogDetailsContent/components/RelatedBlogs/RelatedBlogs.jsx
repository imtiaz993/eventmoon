import classNames from "classnames/bind";

// components
import { Heading } from "components";
import BlogsList from "../BlogsList/BlogsList";

// styles
import styles from "./RelatedBlogs.module.scss";

const cx = classNames.bind(styles);

const RelatedBlogs = ({ blogsList }) => {
  return (
    <div className={cx("other-events-wrapper")}>
      <Heading title="Other related Blogs" to="/blogs" />
      <BlogsList blogsList={blogsList} />
    </div>
  );
};

export default RelatedBlogs;
