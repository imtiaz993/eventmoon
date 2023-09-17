import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from './Feedback.module.scss';
const cx = classNames.bind(styles);
const Feedback = () => {
  return (
    <div className={cx('feedback')}>
      <p>Was this article helpful?</p>
      <div className={cx('reaction')}>
        <div className={cx('reaction-image-wrapper')}>
          <Image src='/assets/images/thumbs-up.svg' width="100%" height="100%" alt="like"/>
        </div>
        <div className={cx('reaction-image-wrapper')}>
          <Image src='/assets/images/thumbs-down.svg' width="100%" height="100%" alt="dislike"/>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
