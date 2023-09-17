// libraries
import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

//components
import { Rating } from 'components';

// styles
import styles from './EventReviews.module.scss';

const cx = classNames.bind(styles);

const EventReviews = ({ data }) => {
  return (
    <div className={cx('event-reviews')}>
      <h1>Reviews</h1>
      <div className={cx('event-rating')}>
        <div className={cx('rating')}>
          <p>{Number( data?.Ratings).toFixed(1)}</p>
          <div>
            <Rating rate={data?.ratings || data?.Ratings} />
            <p>{data.RatingCount}</p>
          </div>
        </div>
        <div className={cx('rate-button')}>
          <Image
            src='/assets/images/star 1.png'
            alt='star'
            width='20px'
            height='20px'
          />
          <p>Rate Event</p>
        </div>
      </div>
      <hr className={cx('line-breaker')} />
      <div className={cx('review')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <span  className={cx('review-giver')}>
        <Image src='/assets/images/review-giver.png' alt='Review person' width="100%" height="100%"/>
        </span>
        <div className={cx('review-details')}>
          <h3>Angela</h3>
          <Rating rate={data?.ratings || data?.Ratings} />
          <p className={cx('event-time')}>12 Jan, 2020 04:30PM</p>
          <p>
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.{' '}
          </p>
        </div>
      </div>

      <button>View All Reviews</button>
    </div>
  );
};

export default EventReviews;
