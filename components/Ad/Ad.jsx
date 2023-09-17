import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

// assets
import HalfMoonFill from '../../svgs/HalfMoonFill';

import styles from './Ad.module.scss';
const cx = classNames.bind(styles);

const AdItem = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={data?.url}
      target='_blank'
      rel='noopener noreferrer'
      className={cx('ad-item-root')}
    >
      <div className={cx('head')}>
        <span className={cx('title')}>{data?.name}</span>
        <span className={cx('tag')}>AD</span>
      </div>
      <div className={cx('image-wrapper')}>
        <Image
          src={!imgError ? data?.image : '/assets/images/ad-img.png'}
          alt='See more or Visits'
          onError={() => setImgError(true)}
          layout='fill'
        />
      </div>
      <div className={cx('footer')}>
        <span className={cx('title')}>Visit sponsor</span>
        <span className={cx('icon-wrapper')}>
          <HalfMoonFill />
        </span>
      </div>
    </a>
  );
};

export default AdItem;
