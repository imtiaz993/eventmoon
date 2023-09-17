import React, { useState } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './Reviews.module.scss';

// assets
import Rate from '../../../svgs/Rate';

// components
import ReviewModal from './ReviewModal/ReviewModal';
import { Button, Rating } from 'components';
import { AnimatePresence } from 'framer-motion';

const cx = classNames.bind(styles);

const ReviewInfo = ({ data, refetch }) => {
  const [isShow, setIsShow] = useState(false);

  const toggle = (_refetch) => {
    setIsShow(!isShow);

    if (_refetch) {
      refetch();
    }
  };

  return (
    <>
      <div className={cx('head')}>
        <h6>Reviews</h6>
        <h1>{parseFloat(data?.ratings || data?.Ratings).toFixed(1)}</h1>
        <div className={cx('stars')}>
          <Rating
            rate={parseFloat(data?.ratings || data?.Ratings).toFixed(1)}
          />
          <span className={cx('count')}>({data?.RatingCount || 0})</span>
        </div>
      </div>
      <div className={cx('head-mob')}>
        <div>
          <h6>Reviews</h6>
          <h1>{parseFloat(data?.ratings || data?.Ratings).toFixed(1)}</h1>
          <div className={cx('stars')}>
            <Rating
              rate={parseFloat(data?.ratings || data?.Ratings).toFixed(1)}
            />
            <span className={cx('count')}>({data?.RatingCount})</span>
          </div>
        </div>
        <Button
          Prefix={<Rate />}
          label='Rate Event'
          wrapperClass={cx('rate-event')}
          onClick={toggle}
        />
      </div>
      <AnimatePresence>
        {isShow && <ReviewModal toggle={toggle} data={data} />}
      </AnimatePresence>
    </>
  );
};

export default ReviewInfo;
