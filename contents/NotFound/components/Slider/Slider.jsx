import React, { useContext } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// component
import EventItem from "../EventItem/EventItem";

// network
import { useNearByEvents } from "hooks";

// context
import { UserAuthContext } from "context/UserAuthContext";

import styles from "./Slider.module.scss";
const cx = classNames.bind(styles);

const Slider = () => {
  // context
  const { userLocation } = useContext(UserAuthContext);

  const { data: events } = useNearByEvents(userLocation);

  return (
    <div className={cx("slider-root", "interesting-events")}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView="auto"
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        centeredSlides={true}
        cssMode
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        breakpoints={{
          640: {
            centeredSlides: false,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            centeredSlides: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          900: {
            centeredSlides: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1280: {
            centeredSlides: false,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
      >
        {events?.map((item, index) => (
          <SwiperSlide key={index}>
            <EventItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
