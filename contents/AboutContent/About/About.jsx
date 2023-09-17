import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
// styles
import styles from "./About.module.scss";
const cx = classNames.bind(styles);
const About = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <h1 className={cx("heading")}>ABOUT US</h1>
        <p className={cx("subheading")}>
          Our mission is to facilitate seamless event promotion by connecting
          event promoters with locations that host event , and event seekers
          promotion by connecting event promoters with locations that host event
          , and event seekers
        </p>
        <button className={cx("button")}>get in touch</button>
      </div>
      <div className={cx("image")}>
        <div className={cx("find-more")}>
          <h4>Find more events</h4>
        </div>
        <span>
        <Image src="/assets/images/about-moon.png" width="400px" height="659px" alt="event-moon"/>
       
       </span>

      </div>
    </div>
  );
};

export default About;
