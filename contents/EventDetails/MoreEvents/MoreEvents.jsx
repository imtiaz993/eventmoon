// libraries
import classNames from "classnames/bind";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// styles
import styles from "./MoreEvents.module.scss";

// utils
import { toEventFormat } from "utils/helper";

// components
import Item from "./Item";

const cx = classNames.bind(styles);

const MoreEvents = ({ data }) => {
  const eventList =
    data?.NearMeEvents || data?.nearMeEvents || Array(5).fill({});

  return (
    <div className={cx("more-events")}>
      <h3>More Interesting Events</h3>
      <div className={cx("interesting-events", "list")}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView="auto"
          slidesPerGroup={1}
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
          {eventList?.map((item, index) => (
            <SwiperSlide key={index}>
              <Item data={toEventFormat(item)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoreEvents;
