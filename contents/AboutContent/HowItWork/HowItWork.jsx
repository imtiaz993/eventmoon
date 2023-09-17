import React from "react";
import classNames from "classnames/bind";
// styles
import styles from "./HowItWork.module.scss";
const cx = classNames.bind(styles);
const HowItWork = () => {
  return (
    <div className={cx("container")}>
      <h1 className={cx("heading")}>How It Works</h1>
      <p className={cx("sub-text-bold")}>
        “Our network has collaborated with partners from all over. Plus, we have
        die-hard fans who contribute by submitting info about events to us.”
      </p>
      <p className={cx("sub-text")}>
        Check our events calendar so you can plan for your next concert or
        activity well in advance. All you need to do is log into your app or
        visit our events page online. You will find a list of events categories
        listed according to upcoming dates. You can also search exclusively for
        the entertainment, sports and social activities that are happening in
        your area.
      </p>
      <p className={cx("sub-text")}>
        Eventmoon makes the process of finding your next social gathering or
        major concert that much easier and efficient. With our free app, you
        never have to be left in the dark when it comes to finding local and new
        events.
      </p>
      <p className={cx("sub-text-bold")}>
        Explore our wide range of categories and discover exceptional deals and
        exciting events to remember!
      </p>
    </div>
  );
};

export default HowItWork;
