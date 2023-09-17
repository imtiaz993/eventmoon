// libraries
import React from 'react';
import classNames from 'classnames/bind';
import Lottie from 'react-lottie-player';

//assets
import * as bellLottie from '../../../../assets/lottie/bell.json';
import * as WalkLottie from '../../../../assets/lottie/walk.json';
import { Rating } from 'components';

// styles
import styles from './EventDescription.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

const EventDescription = ({ data }) => {
  return (
    <div className={cx('event-description')}>
      <div className={cx('event-head')}>
        <h1>{data.EventName}</h1>
        <div className={cx('mobile-notify-button')}>
          <Lottie
            loop
            animationData={bellLottie}
            play
            style={{ width: 27, height: 27 }}
          />
          <p>Notify Me</p>
        </div>
      </div>
      <div className={cx('mobile-rating')}>
        <Rating rate={data?.ratings || data?.Ratings} />
      </div>
      <div className={cx('event-location')}>
        <Image
          src='/assets/images/location.svg'
          alt='Location Icon'
          className={cx('location-icon')}
          objectFit='fill'
          width='30px'
          height='40px'
        />
        <p>{data.Location}</p>
      </div>
      <div className={cx('event-distance')}>
        <Lottie loop animationData={WalkLottie} play />
        <p>{data.DistanceMile} Miles</p>
      </div>
    </div>
  );
};

export default EventDescription;
