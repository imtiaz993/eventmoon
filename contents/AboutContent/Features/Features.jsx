import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
// styles
import styles from "./Features.module.scss";
const cx = classNames.bind(styles);
const Features = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <h1 className={cx("heading")}>FEATURES</h1>
        <div className={cx("subheading")}>
          <p>• Simple and Intuitive Interface to find events</p>
          <p>• Tap the search icon to discover new events near you</p>
          <p>• Travelling? Find Events with Intelligent Event Search Filters</p>
          <p>• Take a break from the mainstream event follow-ups</p>
          <p>• Track the event countdown and stay informed</p>
          <p>
            • A notification system that reminds you of your favorite events
          </p>
          <p>• 100% transparency, privacy, and security for users</p>
          <p>• Discover thousands of events from different countries</p>
          <p>• Promoter Pages to list events and gain more popularity</p>
        </div>
      </div>
      <div className={cx("image")}>
        <div className={cx("find-more")}>
          <Image src="/assets/images/features2.png" alt="event-moon" width="237.33px" height="100%" />
        </div>
        <Image src="/assets/images/features.png" alt="event-moon" width="322.34px" height="652.8px" />
      
      </div>
    </div>
  );
};

export default Features;
