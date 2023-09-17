import classNames from "classnames/bind";

// components
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

// assets
import { IoLockClosed, IoGlobeOutline } from "react-icons/io5";

// styles
import styles from "./Post.module.scss";

const cx = classNames.bind(styles);

const Post = ({ data, isLoading }) => {
  if (isLoading) return <SkeletonComponent />;

  const getUrl = () => {
    if (data) return `post?blogId=${data.blog_id}`;
    else return "#";
  };

  return (
    <Link href={getUrl()}>
      <a className={cx("post-root")}>
        <div className={cx("img-wrapper")}>
          <Image src={data.cover_image} layout="fill" objectFit="cover" />
        </div>
        <div className={cx("details")}>
          <div className={cx("date-auther")}>
            <div className={cx("date")}>
              {data.created_date.match(/(\d+\/\d+\/\d+)/)
                ? data.created_date.match(/(\d+\/\d+\/\d+)/)[0]
                : data.created_date}
            </div>
            <div className={cx("auther")}>{data.posted_by}</div>
          </div>
          <h3 className={cx("title")}>{data.post_title}</h3>
          <p className={cx("description")}></p>
          <div className={cx("macro-info")}>
            <div className={cx("published")}>
              {data.published ? <IoGlobeOutline /> : <IoLockClosed />}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const SkeletonComponent = () => {
  return (
    <div className={cx("post-root")}>
      <Skeleton className={cx("img-wrapper")} />
      <div className={cx("details")}>
        <div className={cx("date-auther", "skeleton")}>
          <Skeleton width={"6rem"} />
          <Skeleton width={"4rem"} />
        </div>
        <Skeleton width={"80%"} />
        <Skeleton width={"50%"} />
      </div>
    </div>
  );
};

export default Post;
