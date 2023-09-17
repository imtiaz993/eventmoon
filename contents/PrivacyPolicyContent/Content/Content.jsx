import React from "react";
import { Navbar, Section } from "components";
import classNames from "classnames/bind";
// styles
import styles from "./Content.module.scss";
const cx = classNames.bind(styles);
const Content = () => {
  return (

        <div className={cx('container')}>
        <h1>PRIVACY NOTICE</h1>
        <h2>Last updated September 14, 2022</h2>
        <p>
          This privacy notice for Musicpad Ilc (doing business as Eventmoon){" "}
          <span className={cx('bold-label')}>("Eventmoon," "we," "us," or "our"),</span> describes how and
          why we might collect, store, use, and/or share{" "}
          <span className={cx('bold-label')}>("process")</span> your information when you use our services{" "}
          <span className={cx('bold-label')}>("Services"),</span> such as when you:
        </p>
        <ul className={cx("list")}>
          <li>
            Visit our website at http://www.Eventmoon.com, or any website of
            ours that links to this privacy notice
          </li>
          <li>
            Download and use our mobile application (Eventmoon), or any other
            application of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p>
          <span className={cx('bold-label')}>Questions or concerns?</span> Reading this privacy notice will
          help you understand your privacy rights and choices. If you do not
          agree with our policies and practices, please do not use our Services.
          If you still have any questions or concerns, please contact us at
          Eventmoon. app.
        </p>
        </div>

  
  );
};

export default Content;
