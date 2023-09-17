import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./Profile.module.scss";
const cx = classNames.bind(styles);

const MenuDropDown = ({ handleLogout }) => {
  return (
    <ul className={cx("menu-dropdown-root")}>
      <li>
        <Link href="/myevents">
          <a>My Events</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </li>
      <li onClick={handleLogout}>Logout</li>
    </ul>
  );
};

export default MenuDropDown;
