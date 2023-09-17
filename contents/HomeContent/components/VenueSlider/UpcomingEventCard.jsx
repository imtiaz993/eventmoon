import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './VenueSlider.module.scss';
const cx = classNames.bind(styles);

const UpcomingEventCard = () => {
  return (
    <div className={cx('upcoming-card')}>
      <div className={cx('event-followers')}>
        <div className={cx('section')}>
          <h3>2</h3>
          <p>Upcoming Events</p>
        </div>
        <div className={cx('separator')}></div>
        <div className={cx('section')}>
          <h3>120</h3>
          <p>Followers</p>
        </div>
      </div>
      <div>
        <div className={cx('rating-info')}>
          <Image
            src='/assets/images/star 1.png'
            width='17.33px'
            height='17.33px'
            alt='rating-star'
          />
          <Image
            src='/assets/images/star 1.png'
            width='17.33px'
            height='17.33px'
            alt='rating-star'
          />
          <Image
            src='/assets/images/star 1.png'
            width='17.33px'
            height='17.33px'
            alt='rating-star'
          />
          <Image
            src='/assets/images/star 5.png'
            width='17.33px'
            height='17.33px'
            alt='rating-star'
          />
          <Image
            src='/assets/images/star 5.png'
            width='17.33px'
            height='17.33px'
            alt='rating-star'
          />
          <span className={cx('rating-no')}>(3)</span>
        </div>
        <button className={cx('following-button')}>Folowing</button>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
