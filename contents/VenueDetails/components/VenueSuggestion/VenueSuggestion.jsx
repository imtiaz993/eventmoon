import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";


// styles
import styles from "./VenueSuggestion.module.scss";

const cx = classNames.bind(styles);
const testImg =
  "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg";

const VenueSuggestion = () => {

  return (
    <Link href="#">
      <a className={cx("venue-item")}>
        <div className={cx("image-wrapper")}>
          <Image
            src={`/api/imageproxy?url=${encodeURIComponent(testImg)}`}
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={cx("wrap")}>
          <h1>The airlines arena</h1>
          <div className={cx("content")}>
           
            <div className={cx("group")}>
              <div className={cx("icon-wrapper", "location")}>
                <div className={cx("label", "double-label")}>
                  
                  <span> 22 people are following this location</span>
                </div>
              </div>
            </div>

            <div className={cx("icon-wrapper", "walk")}>
              <span className={cx("label","follow-label")}>Follow</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VenueSuggestion;
