import React from "react";
import classNames from "classnames/bind";
import Image from 'next/image'
// styles
import styles from "./Hero.module.scss";
const cx = classNames.bind(styles);
const Hero = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <div>
        <Image src="/assets/images/about-hero.png" alt="" width="100%" height="100%"/>
        </div>
      </div>
      <div className={cx("content")}>
        <div className={cx("content-wrapper")}>
          <div>
            <h1 className={cx("heading")}>
              Solving the biggest problems on the planet
            </h1>
          </div>
          <div>
            <h2 className={cx("subheading")}>
              Eventmoon, your entertainment specialist!
            </h2>
          </div>
          <div className={cx("join-button-wrapper")}>
            <button className={cx("join-button")}>
              JOIN OUR EVENT COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
