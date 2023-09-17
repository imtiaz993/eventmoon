import React, {useContext} from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { UserAuthContext } from "context/UserAuthContext";
// utils
import { convertToSlug, toBase64, shimmer } from 'utils/helper';

import styles from './SearchDropDown.module.scss';
const cx = classNames.bind(styles);

const EventItem = ({ data }) => {
  const { userLocation } = useContext(UserAuthContext);
  const getSlug = () => {
    if (Object.entries(data)?.length > 0) {
      let slug = convertToSlug(data.EventName);
      return `/${userLocation?.name.replace(/ /g, "-")}/${data.category.replace(/ /g, "-")}/${slug.replace(/ /g, "-")}/${data.EventId}-${data.TimeId}`;
    }

    return '#';
  };

  return (
    <Link href={getSlug()}>
      <a className={cx('event-item-root')}>
        <div className={cx('image-wrapper')}>
          <Image
            src={`/api/imageproxy?url=${encodeURIComponent(data.Image)}`}
            alt={data.EventName}
            className={cx('inner')}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
        <div className={cx('content')}>
          <h4 className={cx('title')}>{data.EventName}</h4>
          <p className={cx('location')}>
            The Shelter at St. Andrews Hall,431 E Congress
            St,Detroit,MI,48226,US
          </p>
        </div>
      </a>
    </Link>
  );
};

export default EventItem;
