import classNames from "classnames/bind";
import { useContext } from "react";

// components
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Share from "./Share/Share";
import Category from "./Category/Category";
import MyEvents from "./MyEvents/MyEvents";

// context
import { UserAuthContext } from "context/UserAuthContext";

// styles
import styles from "./ProfileContent.module.scss";
const cx = classNames.bind(styles);

const Content = () => {
  const { user } = useContext(UserAuthContext);



  return (
    <div className={cx("profile-content-root")}>
      <ProfileHeader />
      <MyEvents count={3} />
      <Share />
      <Category />
    </div>
  );
};

export default Content;
