import React from 'react';
import classNames from 'classnames/bind';

// components
import { Rating } from 'components';
import Link from 'next/link';
import Image from 'next/image';

//  utils
import { convertToSlug } from 'utils/helper';

// assets
import { Location, Calendar } from '../../../../svgs';

import styles from './EventItem.module.scss';
const cx = classNames.bind(styles);

const EventItem = ({ data }) => {
  const getUrl = () => {
    const slug = convertToSlug(data?.EventName);
    return `/${slug}/${data?.EventId}/${data?.TimeId}`;
  };

  return (
    <Link href={getUrl()}>
      <a>
        <div className={cx('event-item-root')}>
          <div className={cx('img-wrapper')}>
            <Image
              src={`/api/imageproxy?url=${encodeURIComponent(data.Image)}`}
              alt={data.EventName}
              layout='fill'
              objectFit='cover'
              className={cx('main-image')}
            />
            <div className={cx('category')}>{data?.CategoryName}</div>
          </div>
          <div className={cx('content')}>
            <h4 className={cx('title')}>{data?.EventName}</h4>
            <Rating size='xs' rate={data?.Ratings || 0} />
            <p className={cx('location')}>
              <Location />
              <span>{data?.Location}</span>
            </p>
            <p className={cx('start-time')}>
              <Calendar />
              <span>{data?.StartTime}</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default EventItem;
