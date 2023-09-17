import classNames from "classnames/bind";

// components
import { RatingComponent } from "..";
import Image from "next/image";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Details = () => {
  const rate = 4.2;

  return (
    <>
    <div className={cx('top-bg')}></div>
    <div className={cx("details-root")}>
      <div className={cx("left")}>
        <div className={cx("img-wrapper")}>
          <Image
            src={`/api/imageproxy?url=${encodeURIComponent(
              "https://via.placeholder.com/550x350.png"
            )}`}
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={cx("venue-detail")}>
       
            <div className={cx("name")}>
              <b>23 American way New York NY 275429</b>
            </div>
         
          <div className={cx('follow-rating')}>
            <button className={cx("follow")}>Follow</button>
            <RatingComponent rate={rate} className={cx("rating")} />
          </div>
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("seperated")}>
          <div>
            <b>2</b>
            <span>Upcoming Events</span>
          </div>
          <div>
            <b>120</b>
            <span>Followers</span>
          </div>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default Details;
