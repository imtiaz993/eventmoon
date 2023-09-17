// libraries
import React, { Suspense, useEffect, useState, useContext } from "react";
import classNames from "classnames/bind";
import dynamic from "next/dynamic";

// components
import { InViewAnimation, Ribbon, Pill } from "..";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

//assets
import Fire from "../../svgs/Fire";
import CalendarFill from "../../svgs/CalendarFill";
import Location from "../../svgs/Location";
import Walk from "../../svgs/Walk";
import Video from "../../svgs/Video";
// context
import { UserAuthContext } from "context/UserAuthContext";

import * as FireIconAnim from "../../assets/lottie/fireicon.json";

// utils
import { convertToSlug, rgbDataURL } from "utils/helper";

// styles
import styles from "./Event.module.scss";
const cx = classNames.bind(styles);

const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: false,
  suspense: true,
});

const EventItem = ({ data, classname }) => {
  const { userLocation } = useContext(UserAuthContext);

  const [imgError, setImgError] = useState(false);
  const [tag, setTag] = useState({
    label: "",
    isNew: null,
  });

  useEffect(() => {
    if (data) {
      if (data.isNew === "1")
        setTag({
          label: "New Event",
          isNew: true,
        });
      else if (data.isNew !== "1" && data.isTrending === "1") {
        setTag({
          label: "Trending",
          isNew: false,
        });
      }
    }
  }, [data]);

  const getSlug = () => {
    if (Object.entries(data)?.length > 0) {
      let slug = convertToSlug(data.name);
      return `/${userLocation?.name.replace(/ /g, "-")}/${data.category.replace(/ /g, "-")}/${slug}/${data.id}-${
        data.timeId
      }`;
    }

    return "#";
  };

  const isNow = () => {
    return data.startTime === "Happening Now";
  };

  if (!data?.id) {
    return <SkeletonComponent />;
  }

  return (
    <div className={cx("event-item-root", classname)}>
      <Link href={getSlug()}>
        <a>
          <div className={cx("img-wrapper")}>
            <div className={cx("main-image")}>
              <Image
                // src={
                //   !imgError
                //     ? `/api/imageproxy?url=${encodeURIComponent(data.image)}`
                //     : BrokenImg
                // }
                src={
                  !imgError
                    ? data.image
                    : "/assets/images/placeholder-gradient.png"
                }
                alt={data.name}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 20%"
                className={cx("image")}
                onError={() => setImgError(true)}
                placeholder="blur"
                blurDataURL={rgbDataURL(2, 129, 210)}
                unoptimized
              />
            </div>
            <Pill
              label={data?.category || ""}
              wrapperClass={cx("pill-wrapper")}
            />
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
                    <Suspense fallback={<Fire />}>
                      <Lottie
                        loop
                        animationData={FireIconAnim}
                        play
                        className={cx("fire-icon")}
                      />
                    </Suspense>
                  }
                  wrapperClass={cx("trending-wrapper")}
                  position="bottom-right"
                />
              </InViewAnimation>
            )}
          </div>
          <div className={cx("wrap")}>
            <h1>{data.name}</h1>
            <div className={cx("content")}>
              <div className={cx("icon-wrapper", "calendar")}>
                <span className={cx("icon")}>
                  <CalendarFill />
                </span>
                <span className={cx("label")}>
                  {data?.callToBook === "call to book"
                    ? "Contact for time"
                    : data.startTime}
                </span>
              </div>

              <div className={cx("group")}>
                <div className={cx("icon-wrapper", "location")}>
                  <span className={cx("icon")}>
                    <Location />
                  </span>
                  <div className={cx("label", "double-label")}>
                    <span>{data.venue}</span>
                    <span>
                      {data.city}, {data.state}
                    </span>
                  </div>
                </div>
              </div>

              {data?.isVirtual === "0" ? (
                <div className={cx("icon-wrapper", "walk")}>
                  <span className={cx("icon")}>
                    <Walk />
                  </span>
                  <span className={cx("label")}>
                    {data.distance} {data.distance === 1 ? "mile" : "miles"}{" "}
                    away
                  </span>
                </div>
              ) : (
                <div className={cx("icon-wrapper")}>
                  <span className={cx("icon")}>
                    <Video />
                  </span>
                  <span className={cx("label")}>online event</span>
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

function SkeletonComponent() {
  return (
    <div className={cx("event-item-root")}>
      <div className={cx("img-wrapper")}>
        <Skeleton className={cx("main-image", "placeholder")} />
      </div>
      <div className={cx("wrap")}>
        <h1>
          <Skeleton />
        </h1>
        <div className={cx("content")}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export default EventItem;
