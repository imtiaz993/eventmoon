import classNames from "classnames/bind";
import styles from "./GetApp.module.scss";
//  import getApp from './get-app.mp4'
const cx = classNames.bind(styles);

const GetApp = () => {
  return (
    <div className={cx('get-app-video')}>
      <video autoPlay muted loop src={"/get-app.mp4"} />

    </div>
  );
};

export default GetApp;
