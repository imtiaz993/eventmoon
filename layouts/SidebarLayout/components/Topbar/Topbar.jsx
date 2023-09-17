import classNames from "classnames/bind";
import { useContext } from "react";
import { useRouter } from "next/router";

// components
import { Button } from "components";

// assets
import { BiMenu } from "react-icons/bi";

// context
import { AdminAuthContext } from "context/AdminAuthContext";

// styles
import styles from "./Topbar.module.scss";

const cx = classNames.bind(styles);

const Topbar = ({ toggleSidebarShown }) => {
  const { logout } = useContext(AdminAuthContext);

  const router = useRouter();

  function handleLogout() {
    logout();
    router.push({
      pathname: "/admin-login",
      query: { backTo: router.pathname },
    });
  }

  return (
    <div className={cx("topbar-root")}>
      <Button
        Prefix={<BiMenu className={cx("menu-icon")} />}
        onClick={toggleSidebarShown}
      />
      <Button
        label="Logout"
        wrapperClass={cx("logout-btn")}
        onClick={handleLogout}
      />
    </div>
  );
};

export default Topbar;
