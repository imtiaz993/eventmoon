import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { useDeletePost, useGetPost } from "hooks";

// styles
import styles from "./Post.module.scss";

// component
import { Button, Section } from "components";
import Content from "./Content";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

// assets
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const cx = classNames.bind(styles);

const Post = () => {
  const router = useRouter();

  const { data, isLoading } = useGetPost(router.query.blogId);

  const { mutate: deletePost } = useDeletePost();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?"))
      deletePost(router.query.blogId, {
        onSuccess: () => {
          router.push("posts");
        },
      });
  };

  return (
    <Section>
      <div className={cx("post-root")}>
        <div className={cx("hero")}>
          {!isLoading ? (
            <Image
              src={data.blog_content.cover_image}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <Skeleton height="100%" />
          )}
          <div className={cx("details")}>
            <h1 className={cx("title")}>{data?.blog_content.post_title}</h1>
            <div className={cx("buttons")}>
              <Link href={`create?blogId=${router.query.blogId}`}>
                <a>
                  <Button
                    label="Edit Post"
                    Prefix={<FaEdit />}
                    prefixClass={cx("prefix")}
                    wrapperClass={cx("edit-btn")}
                  />
                </a>
              </Link>
              <Button
                label="Delete Post"
                Prefix={<FaTrashAlt />}
                prefixClass={cx("prefix")}
                wrapperClass={cx("delete-btn")}
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>

        <div className={cx("details")}>
          <div className={cx("row")}>
            <div className={cx("date")}>
              {!isLoading ? data.created_date : <Skeleton width={"10rem"} />}
            </div>
            <div className={cx("author")}>
              {!isLoading ? (
                data.blog_content.posted_by
              ) : (
                <Skeleton width={"8rem"} />
              )}{" "}
            </div>
          </div>

          <p className={cx("description")}>
            {!isLoading ? (
              data.blog_content.description
            ) : (
              <Skeleton count={3} />
            )}
          </p>

          <div className={cx("content")}>
            <Content data={data?.blog_content.content} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Post;
