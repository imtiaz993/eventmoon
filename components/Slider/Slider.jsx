import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

// styles
import styles from './Slider.module.scss';

// assets
import ChevronRight from '../../svgs/ChevronRight';

const cx = classNames.bind(styles);

const Slider = ({
  Item,
  list,
  space,
  perView,
  perGroup = 1,
  center,
  wrapperClass,
  slideClass,
  breakpoints,
  navigation = true,
  pagination = false,
  autoplay = false,
  loop,
  ...rest
}) => {
  const prevElRef = useRef(null);
  const nextElRef = useRef(null);

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      className={cx('slider-root', wrapperClass)}
      spaceBetween={space}
      slidesPerView={perView}
      slidesPerGroup={perGroup}
      centeredSlides={center}
      breakpoints={breakpoints}
      
      navigation={
        navigation === true
          ? { nextEl: nextElRef.current, prevEl: prevElRef.current }
          : navigation.nextEl
          ? navigation
          : false
      }
      pagination={pagination}
      autoplay={autoplay}
      loop={loop}
    >
      {list.slice(0, 6).map((item, i) => (
        <SwiperSlide className={slideClass} key={i}>
          <Item key={i} data={item} {...rest} />
        </SwiperSlide>
      ))}
      <div ref={nextElRef} className={cx('next-btn')}>
        <ChevronRight />
      </div>
      <div ref={prevElRef} className={cx('prev-btn')}>
        <ChevronRight />
      </div>
    </Swiper>
  );
};

export default Slider;
