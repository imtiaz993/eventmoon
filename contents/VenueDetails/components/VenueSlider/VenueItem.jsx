import { useState } from "react";
import React, { Suspense, useEffect } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
// icons

import Bell from "../../../../svgs/Bell";
import Calendar from "../../../../svgs/Calendar";
import InViewAnimation from "../../../../components/Animation/InViewAnimation";
import Ribbon from "../../../../components/Ribbon/Ribbon";
import Pill from "../../../../components/Pill/Pill";
import  Fire  from "../../../../svgs/Fire";
import CalendarFill from "../../../../svgs/CalendarFill";
import Location from "../../../../svgs/Location";
import Walk from "../../../../svgs/Walk";
import * as bellLottie from "../../../../assets/lottie/bell.json";
import * as FireIconAnim from "../../../../assets/lottie/fireicon.json";
import Video from "../../../../svgs/Video";

// styles
import styles from "./styles.module.scss";
const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: true,
  suspense: false,
});
const cx = classNames.bind(styles);
const testImg =
  "https://www.celebrityradio.biz/wp-content/uploads/2015/10/Review-Disney-Aladdin-Musical.jpg";

const VenueItem = () => {
  const [tag, setTag] = useState({ label: "Trending" });
  useEffect(() => {
    setTag({
      label: "Trending",
    });
  }, []);
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
          <Pill label={"Business"} wrapperClass={cx("pill-wrapper")} />
          {tag.label === "New Event" && (
            <Ribbon
              label={
                <>
                  <div className={cx("glow")}></div>
                  New Event
                </>
              }
              classname={cx("new-event-wrapper")}
            />
          )}
          {tag.label === "Trending" && (
            <InViewAnimation
              hiddenProps={{ y: 5, opacity: 0 }}
              visibleProps={{ y: 0, opacity: 1 }}
              transitionProps={{ duration: 0.35, delay: 0.5 }}
            >
              <Pill
                label="Trending"
                Prefix={
                
                    <Lottie
                      loop
                      animationData={FireIconAnim}
                      play
                      className={cx("fire-icon")}
                    />
                 
                }
                wrapperClass={cx("trending-wrapper")}
                position="bottom-right"
              />
            </InViewAnimation>
          )}
        </div>

        <div className={cx("wrap")}>
        <div className={cx('content-wrapper')}>
        <div className={cx("notify-button")}>
          
              <Lottie
                loop
                animationData={bellLottie}
                play
                style={{ width: 27, height: 27 }}
              />
         

            <p>Notify Me</p>
          </div>
          <div className={cx('content-container')}>
          <h1>{"kjhj"}</h1>
          <div className={cx("content")}>
            <div className={cx("icon-wrapper", "calendar")}>
              <span className={cx("icon")}>
                <CalendarFill />
              </span>
              {/* <span className={cx('label')}>
                  {data?.callToBook === 'call to book'
                    ? 'Contact for time'
                    : data.startTime}
                </span> */}
            </div>

            <div className={cx("group")}>
              <div className={cx("icon-wrapper", "location")}>
                <span className={cx("icon")}>
                  <Location />
                </span>
                <div className={cx("label", "double-label")}>
                  <span>{"fdgg"}</span>
                  <span>{"kk;lkl;"}</span>
                </div>
              </div>
            </div>

            {/* {data?.isVirtual === '0' ? ( */}
                <div className={cx('icon-wrapper', 'walk')}>
                  <span className={cx('icon')}>
                    <Walk />
                  </span>
                  <span className={cx('label')}>
                    1 {1 === 1 ? 'mile' : 'miles'}{' '}
                    away
                  </span>
                 </div>
              {/* ) : (
                <div className={cx('icon-wrapper')}>
                  <span className={cx('icon')}>
                    <Video />
                  </span>
                  <span className={cx('label')}>online event</span>
                </div>
              )} */}
          </div>
          </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VenueItem;
