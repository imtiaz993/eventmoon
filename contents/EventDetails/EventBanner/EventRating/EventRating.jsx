// liobraries
import React, { Suspense } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Lottie from 'react-lottie-player';

//assets
import * as bellLottie from '../../../../assets/lottie/bell.json';
import * as FireLottie from '../../../../assets/lottie/fireicon.json';

// styles
import styles from './EventRating.module.scss';
import { Rating } from 'components';

const cx = classNames.bind(styles);

const EventRating = ({ data }) => {
  return (
    <div className={cx('event-rating')}>
      <div className={cx('trending-text')}>
        {/* <Image
          src='/assets/images/fire.svg'
          alt='Fire Icon'
          className={cx('Fire-icon')}
          objectFit='fill'
          width='40px'
          height='50px'
        /> */}
        <Lottie
          loop
          animationData={FireLottie}
          play
          style={{ width: '100px', height: '80px' }}
        />
        <h1>Trending</h1>
        <p>{data.InterestedCount} People are interested</p>
      </div>
      <div className={cx('ratings')}>
        <Rating rate={data?.ratings || data?.Ratings} />
        <p>({Number(data.Ratings).toFixed(1)}/5)</p>
      </div>
      <div className={cx('notify-button')}>
        <Lottie
          loop
          animationData={bellLottie}
          play
          style={{ width: 27, height: 27 }}
        />
        <p>Notify Me</p>
      </div>
    </div>
  );
};

export default EventRating;
