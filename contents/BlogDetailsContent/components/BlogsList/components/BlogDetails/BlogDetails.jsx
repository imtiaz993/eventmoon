import React, { useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./BlogDetail.module.scss";

const cx = classNames.bind(styles);
const BlogDetail = ({ index, blog }) => {
  const [seeMore, setSeeMore] = useState(false);
  const myLoader=({src})=>{
		return blog.BlogImage;
	  }
  return (
    <div className={cx("blogs-container")}>
      <h1 className={cx("title")}></h1>
      <h2 className={cx("sub-title")}></h2>
      <div>
        <div className={cx("blogs-image-wrapper")}>
          {index === 0 && (
            <div className={cx("social-wrapper")}>
              <div className={cx("social-logo")}>
                <span>
              <Image
           src="/assets/images/twitter.svg"
            width="100%"
            height="100%"
            alt="twitter"
          />
          </span>
          </div>
               
              <div className={cx("social-logo")}>
                <span>
              <Image
           src="/assets/images/fb.svg" 
            width="100%"
            height="100%"
            alt="fb"
          />
          </span>
                
              </div>
              <div className={cx("social-logo")}>
                <span>
              <Image
            src="/assets/images/mail.svg"  
            width="100%"
            height="100%"
            alt="mail"
          />
          </span>
             
              </div>
            </div>
          )}
          <span  className={cx("blog-image")}>
          <Image
           
            src={blog.BlogImage}
            loader={myLoader}
            alt="..."
            width={"100%"}
            height={"100%"}
         
          />
          </span>
          <div className={cx("image-footer")}>
            <div className={cx("footer-user")}>
              <div className={cx("user-image")}>
       <span>
        <Image
          src="/assets/images/blogs-user.png"
            width="50px"
            height="50px"
            alt="user"
          />
             </span>         
              </div>
              <div className={cx("user")}>
                <p>Suneel</p>
                <p>gernalist</p>
              </div>
            </div>
            <div>
              <p className={cx("posted")}>Suneel posted 9:59pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("content-wrapper")}>
        <h1 className={cx("title")}></h1>
        <h2 className={cx("name")}>{blog.BlogTitle}</h2>
        <p className={cx("date")}>
          <span>
        <Image
           src="/assets/images/calender.svg"
            width="34px"
            height="34px"
            alt="calender"
          />
          </span>
         
          May 23rd - May 29th
        </p>

        <p className={cx("description")}>
          {blog.BlogDescription.split(".")[0]}.
          {seeMore ? (
            <>
              {blog.BlogDescription}.
              <span
                className="see-less"
                onClick={() => {
                  setSeeMore(false);
                }}
              >
                Show less
              </span>
            </>
          ) : (
            <>
              <span
                className="see-less"
                onClick={() => {
                  setSeeMore(true);
                }}
              >
                Show more
              </span>
            </>
          )}
        </p>

        <p className={cx("publish")}>Publish time 11:00 PM 21/03/2022</p>
      </div>
      <div>
        <h2 className={cx("keywords-label")}>Keywords</h2>
        <div className={cx("keyword-wrapper")}>
          <div>
            <p>Diwalifestival</p>
          </div>
          <div>
            <p>Live music</p>
          </div>
          <div>
            <p>Events in India</p>
          </div>
          <div>
            <p>Holy</p>
          </div>
          <div>
            <p>Fireworks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
