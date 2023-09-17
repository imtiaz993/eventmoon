// libraries
import React, { useState } from 'react';
import classNames from 'classnames/bind';

// components
import ReviewModal from '../ReviewModal/ReviewModal';
import { Button, Rating } from 'components';
import { AnimatePresence } from 'framer-motion';

// assets
import Rate from '../../../../svgs/Rate';

// styles
import styles from './FirstReview.module.scss';

const cx = classNames.bind(styles);

const FirstReview = ({ data, refetch }) => {
  const [isShow, setIsShow] = useState(false);

  const toggle = (_refetch) => {
    setIsShow(!isShow);

    if (_refetch) {
      refetch();
    }
  };

  return (
    <>
      <div className={cx('first-review')}>
        <Button label='Rate Event' Prefix={<Rate />} onClick={toggle} />
        <div className={cx('rating-wrapper')}>
          <Rating rate={data?.Ratings} />
        </div>
        <p>Be the first to rate this Event</p>
      </div>
      <AnimatePresence>
        {isShow && <ReviewModal toggle={toggle} data={data} />}
      </AnimatePresence>
    </>
  );
};

export default FirstReview;
