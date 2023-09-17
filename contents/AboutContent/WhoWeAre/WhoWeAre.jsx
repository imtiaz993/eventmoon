import React from "react";
import classNames from "classnames/bind";
// styles
import styles from "./WhoWeAre.module.scss";
const cx = classNames.bind(styles);
const WhoWeAre = () => {
  return (
    <div className={cx("container")}>
      <h1 className={cx("heading")}>WHO WE ARE</h1>
      <p className={cx("sub-text-bold")}>
        “We are an average group of people who have banded together to solve the
        worlds problems by building an event community that makes sharing and
        finding events easy.”
      </p>
      <p className={cx("sub-text")}>
        Life is meant to be enjoyed to the fullest, and event seekers want to
        make the most out of their free time. Eventmoon is a new free app, a
        platform on android and iOS that makes it easy to find fun events in
        your local area without having to spend hours looking through endless
        websites or event boards. This powerful free application platform gives
        you the details you need about every public event in your area.
      </p>
      <p className={cx("sub-text")}>
        Eventmoon is an event and community guide for your area. This intuitive
        platform comes with a notification system to remind you when and where
        events are happening. It will also notify you of new possibilities based
        on your location and recent searches. Easy-to-read, userfriendly
        application is perfect for traveling.
      </p>
      <p className={cx("sub-text-bold")}>
        We truly believe in providing quality entertainment at no charge! Come
        and join our event community and enjoy the experience of finding
        entertainment events
      </p>
    </div>
  );
};

export default WhoWeAre;
