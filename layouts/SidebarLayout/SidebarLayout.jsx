import classNames from "classnames/bind";
import { useState, useEffect } from "react";

// styles
import styles from "./SidebarLayout.module.scss";

// components
import { Sidebar, Topbar } from "./components";

const cx = classNames.bind(styles);

const SIDEBAR_SHOWN = "dashboard--sidebar-shown";

const SidebarLayout = ({ children }) => {
  const [sidebarShown, setSidebarShown] = useState(false);

  function toggleSidebarShown() {
    setSidebarShown((shown) => {
      sessionStorage.setItem(SIDEBAR_SHOWN, (!shown).toString());
      return !shown;
    });
  }

  useEffect(() => {
    setSidebarShown(sessionStorage.getItem(SIDEBAR_SHOWN) === "true");
  }, []);

  return (
    <div
      className={cx("sidebar-layout-root", { "sidebar-shown": sidebarShown })}
    >
      <Sidebar shown={sidebarShown} />
      <div className={cx("content")}>
        <Topbar toggleSidebarShown={toggleSidebarShown} />
        <div className={cx("children-wrapper")}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
