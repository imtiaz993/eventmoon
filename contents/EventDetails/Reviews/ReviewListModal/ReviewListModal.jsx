// libraries
import classNames from "classnames/bind";

// styles
import styles from "./ReviewListModal.module.scss";

// components
import Item from "../Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// dake data
const reviews = [1, 2];

const cx = classNames.bind(styles);

const ReviewListModal = ({ list, closeModal }) => {
  return (
    <div className={cx("modal")} onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()} className={cx("inner")}>
        <p className={cx("heading")}>Reviews and Ratings</p>
        <Swiper slidesPerView={1} navigation modules={[Navigation]}>
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <Item data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewListModal;
