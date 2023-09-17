import React from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <div className={cx('news-heading')}>
      <div className={cx('logo-news')}>
        <div className={cx('logo-image-wrapper')}>
          <Image src='/assets/images/logo.svg' alt='eventmoon' width="100%" height="100%"  />
        </div>
        <div className={cx('news-image-wrapper')}>
          <Image src='/assets/images/news.png' alt='news' width="100%" height="100%" />
        </div>
      </div>
      <div>
        <h2 className={cx('top-five')}>Top 5 events you should know about</h2>
      </div>
    </div>
  );
};

export default Header;
