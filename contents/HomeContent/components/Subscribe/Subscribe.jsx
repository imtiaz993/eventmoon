import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './subscribe.module.scss';

const cx = classNames.bind(styles);

const Subscribe = () => {
  return (
    <div className={cx('subscribe-wrapper')}>
      <div className={cx("content")}>
      <h1 className={cx('subscribe-heading')}>
        Subscribe for our mailing list to get latest{' '}
        <span>updates and offers</span>
      </h1>
     
      <div className={cx('subscribe-form')}>
        <input type='email' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
      </div>
     
      <div className={cx('star-image')}>
        <Image src='/assets/images/subscribe-star.png' width={"600px"} height={"500px"} alt="star"/>
      </div>
  
    </div>
  );
};

export default Subscribe;
