import classNames from "classnames/bind";
import { useGetPosts } from "hooks";
import { useState } from "react";

// styles
import styles from "./Posts.module.scss";

// components
import { Section, Button } from "components";
import { Post } from "./components";
import Link from "next/link";

// assets
import { FaPlus } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const cx = classNames.bind(styles);

const Posts = () => {
  // const pageSize = 2;
  // const pageCount = 2;
  // const [pageNumber, setPageNumber] = useState(0);

  const pageNumber = 0;
  const pageSize = 12;
  const { data: posts, isLoading } = useGetPosts(pageNumber + 1, pageSize);

  return (
    <div className={cx("posts-root")}>
      <Section wrapperClass={cx("wrapper")}>
        <div className={cx("header")}>
          <div>
            <h2>Blog Posts</h2>
          </div>
          <Link href="create">
            <a>
              <Button
                label="New Post"
                Prefix={<FaPlus />}
                prefixClass={cx("prefix")}
                wrapperClass={cx("new-post-btn")}
              />
            </a>
          </Link>
        </div>

        <div className={cx("posts")}>
          {!isLoading
            ? posts.map((post) => (
                <Post
                  key={post.blog_id}
                  data={{
                    ...post.blog_content,
                    created_date: post.created_date,
                    blog_id: post.blog_id,
                  }}
                />
              ))
            : Array.from(Array(pageSize)).map((_, i) => (
                <Post key={i} isLoading />
              ))}
        </div>

        {/* <div className={cx("pagination")}>
          <span
            onClick={() =>
              setPageNumber((n) => (n + pageCount - 1) % pageCount)
            }
          >
            <BiChevronLeft />
          </span>
          <span>1</span>
          <span>2</span>
          <span onClick={() => setPageNumber((n) => (n + 1) % pageCount)}>
            <BiChevronRight />
          </span>
        </div> */}
      </Section>
    </div>
  );
};

export default Posts;
