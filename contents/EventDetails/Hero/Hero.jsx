// libraries
import React, { useState, useEffect,useContext } from 'react';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { UserAuthContext } from "context/UserAuthContext";
// components
import Skeleton from 'react-loading-skeleton';
import { Rating } from 'components';

// assets
import { GrSend } from 'react-icons/gr';

// icons
import { X, Fire, Location, Share } from '../../../svgs';

// component
import ImageSlider from './ImageSlider';

// import ImageBox from "./ImageBox/ImageBox";
import Description from './Description/Description';

// icons
import Calendar from '../../../svgs/Calendar';

// utils
import { convertToSlug } from 'utils/helper';

// styles
import styles from './Hero.module.scss';
const cx = classNames.bind(styles);

const Hero = ({ data }) => {
  const router = useRouter();
  const { userLocation } = useContext(UserAuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    if (window.innerWidth < 640) {
      if (window.scrollY > 100) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }

      if (window.scrollY > 140) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  const handleShare = async () => {
    const origin = window.location.origin;
    const slug = convertToSlug(data.EventName);
    let eventUrl = `${origin}/${slug}/${data.EventId}/${data.TimeId}`;

    const shareData = {
      title: data.EventName,
      text: `${data.EventName}\n`,
      url: eventUrl,
    };

    if (navigator.canShare) {
      navigator
        .share(shareData)
        .then(() => {
          console.log('ready to share');
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log('navigator.share() not supported');
    }
  };

  return (
    <div className={cx('hero-root')}>
      <div className={cx('wrapper')}>
        <div className={cx('slider-wrapper')}>
          {data?.Image ? (
            <ImageSlider data={data} />
          ) : (
            <Skeleton
              className={cx('slider-image')}
              style={{ minHeight: '335px' }}
            />
          )}
          <div className={cx('trending-banner', { sticky: isSticky })}>
            {data?.IsTrending === '1' && (
              <div className={cx('left-section')}>
                <Fire />
                <span className={cx('label')}>
                  <span>Trending</span>
                  <span>{data?.IsInterested} People are interested</span>
                </span>
              </div>
            )}
            {data?.StartTime ? (
              <>
                {data?.CallToBook === '' ? (
                  <span className={cx('right-section')}>
                    <Calendar />
                    <span>{data?.StartTime}</span>
                  </span>
                ) : (
                  <span className={cx('right-section', 'btn-book')}>
                    <a href={`tel:${data?.PhoneNo}`}>
                      <span>{data?.CallToBook}</span>
                    </a>
                  </span>
                )}
              </>
            ) : (
              <Skeleton className={cx('trending_date')} />
            )}
          </div>
          {isSticky && <div style={{ height: '45px' }}></div>}
        </div>
        <div className={cx('content')}>
          <div className={cx('start-time')}>
            {data?.StartTime ? (
              <>
                {data?.CallToBook === '' ? (
                  <>
                    <Calendar />
                    <span>{data?.StartTime}</span>
                  </>
                ) : (
                  <a href={`tel:${data?.phoneNo}`}>
                    <span className={cx('btn-book')}>{data?.CallToBook}</span>
                  </a>
                )}
              </>
            ) : (
              <Skeleton />
            )}
          </div>
          <div className={cx('overview')}>
            <div>
              <h2>{data?.EventName || <Skeleton />} </h2>
              <div className={cx('wrapper')}>
                <Rating rate={data?.ratings || data?.Ratings} />
                {/* <Button
                  classname={cx("btn-notify-overview")}
                  label="Notify me"
                  PrefixIcon={Bell}
                /> */}
              </div>
            </div>
          </div>
          <div className={cx('info')}>
            {data?.Location !== undefined ? (
              <p className={cx('location')}>
                
                <Location />
                <span>{data?.Location}</span>
              </p>
            ) : (
              <Skeleton />
            )}
            {data?.DistanceMile ? (
              <p className={cx('miles')}>
                <GrSend /> <span>{data?.DistanceMile} miles away</span>
              </p>
            ) : (
              <Skeleton />
            )}
            {/* <Button
              classname={cx("btn-notify-info")}
              label="Notify me"
              PrefixIcon={Bell}
            /> */}
          </div>
        </div>
      </div>
      {data?.Description !== undefined && (
        <Description id={data.EventId} description={data.Description} />
      )}
      <div className={cx('header', { gradient: isShow })}>
        <span onClick={() => router.back()}>
          <X />
        </span>
        <span onClick={handleShare}>
          <Share />
        </span>
      </div>
    </div>
  );
};

export default Hero;
