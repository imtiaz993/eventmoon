// libraries
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
// styles
import styles from "./VenueImages.module.scss";
const cx = classNames.bind(styles);

const VenueImages = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  //   const eventPictures = [];
  //   data.ImageUrls.forEach((element) => {
  //     eventPictures.push({ img: element, id: 0 });
  //   });
  //   const NumberOfImages=eventPictures.length
	const myLoader=({src})=>{
		return `https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg`;
	  }
  return (
    <div className={cx("venue-pictures")}>
      <div className={cx("pictures-head")}>
        <h1>Venue Photos</h1>
      </div>
      <div className={cx("venue-img-parent")}>
        <div className={cx("venue-pic")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={
              "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg"
            }
            alt="event picture"
           width="100%"
           height="100%"
            loader={myLoader}
          />
        </div>
        <div className={cx("venue-pic")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={
              "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg"
            }
            alt="event picture"
           width="100%"
           height="100%"
            loader={myLoader}
          />
        </div>
        <div className={cx("venue-pic")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={
              "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg"
            }
            alt="event picture"
           width="100%"
           height="100%"
            loader={myLoader}
          />
        </div>
        <div className={cx("venue-pic")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={
              "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg"
            }
            alt="event picture"
           width="100%"
           height="100%"
            loader={myLoader}
          />
        </div>
        <div className={cx("venue-pic")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={
              "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg"
            }
            alt="event picture"
           width="100%"
           height="100%"
            loader={myLoader}
          />
        </div>
      </div>
    </div>
  );
};

export default VenueImages;
