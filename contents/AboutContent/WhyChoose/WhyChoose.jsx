import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
// styles
import styles from "./WhyChoose.module.scss";
const cx = classNames.bind(styles);
const WhyChoose = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <h1 className={cx("heading")}>WHY CHOOSE US</h1>
        <p className={cx("subheading")}>
          "We are your trusted local events finder. Introducing the new
          Eventmoon app, available on Google Play and the Apple Store, so you
          won't have to wait to discover what's happening in your city. With our
          free app, you can explore the latest activities and entertainment!"
        </p>
      </div>
      <div className={cx("image")}>
      <Image src="/assets/images/why-choose.png" alt="event-moon" width="325px" height="658.18px" />
       
      </div>
    </div>
  );
};

export default WhyChoose;
