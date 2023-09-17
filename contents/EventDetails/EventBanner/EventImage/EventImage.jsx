/* eslint-disable @next/next/no-img-element */
// libraries
import React from 'react';
import classNames from 'classnames/bind';
import Lottie from 'react-lottie-player';

//assets
import { Clock, Share } from 'svgs';
import ClockJson from '../../../../assets/lottie/clock.json';
import FireJson from '../../../../assets/lottie/fireicon.json';
import { BiChevronLeft } from 'react-icons/bi';

// styles
import styles from './EventImage.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { date } from 'yup';
const cx = classNames.bind(styles);

const EventImage = ({ data }) => {
  const router = useRouter();

  return (
    <div className={cx('Event-Banner-Image')}>
      <div className={cx('share-bar')}>
        <div className={cx('back-btn')} onClick={() => router.back()}>
          <BiChevronLeft size='30px' />
        </div>
        <Share />
      </div>
      <div className={cx('event-image')}>
        <Image src={data.Image} unoptimized layout='fill' alt='Event Image' />

       
        <div className={cx('event-tag')}>{data.CategoryName}</div>
        <div className={cx('desktop-event-date-time')}>
          <Lottie
            loop
            animationData={ClockJson}
            play
            style={{ position: 'absolute', right: 0 }}
          />
          <p>{data.StartDate}</p>
        </div>
        <div className={cx('mobile-event-date-time')}>
          <div className={cx('trending-text')}>
            <Lottie
              loop
              animationData={FireJson}
              play
              style={{ width: 40, height: 40 }}
            />
             <div>
             {data.IsTrending==="1"&&  <h1>Trending</h1>}
              <p>{data.InterestedCount} People are interested</p>
            </div>
          </div>
          <div className={cx('event-date')}>
            <Clock color='#E85353' width='25px' height='25px' />
            <p>{data.StartDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventImage;
