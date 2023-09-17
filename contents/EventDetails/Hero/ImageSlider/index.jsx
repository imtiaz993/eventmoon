import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

// component
import { LightBox } from 'components';
import Image from 'next/image';

// assets
import { AiOutlineFullscreen } from 'react-icons/ai';

// styles
import styles from '../Hero.module.scss';
const cx = classNames.bind(styles);

const ImageSlider = ({ data }) => {
  const [imgError, setImgError] = useState(false);
  const [gallery, setGallery] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (data && isExist()) {
      setGallery(data?.ImageUrls || [data?.Image]);
    }
  }, [data]);

  useEffect(() => {
    if (gallery?.length === 1) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, [gallery]);

  const isExist = () => {
    if (data.ImageUrls) {
      if (data?.ImageUrls?.length > 0 && data?.ImageUrls?.[0] !== '')
        return true;
    }

    return false;
  };

  const onImgError = (_index) => {
    let newGallery = gallery.map((item, i) =>
      i === _index ? '/assets/images/placeholder-city.png' : item
    );

    setGallery(newGallery);
  };

  return (
    <div className={cx('image-slider')}>
      {gallery?.length > 0 && (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          ref={swiperRef}
          navigation={false}
          centeredSlides={true}
          freeMode={true}
          slidesPerView='auto'
          preloadImages
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            576: {
              freeMode: false,
            },
          }}
        >
          {!isExist() ? (
            <SwiperSlide>
              <Image
                src={
                  !imgError
                    ? `/api/imageproxy?url=${encodeURIComponent(data?.Image)}`
                    : '/assets/images/placeholder-city.png'
                }
                alt='event_details'
                className={cx('slider-image')}
                objectFit='cover'
                width={320}
                height={180}
                layout='responsive'
                onError={() => setImgError(true)}
              />
            </SwiperSlide>
          ) : (
            <>
              {gallery?.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={
                      item.src ||
                      `/api/imageproxy?url=${encodeURIComponent(item)}`
                    }
                    alt='event_details'
                    className={cx('slider-image')}
                    objectFit='cover'
                    width={320}
                    height={180}
                    layout='responsive'
                    onError={() => onImgError(i)}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      )}
      <span className={styles.icon} onClick={() => setIsOpen(true)}>
        <AiOutlineFullscreen />
      </span>
      <LightBox
        images={data?.ImageUrls}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default ImageSlider;
