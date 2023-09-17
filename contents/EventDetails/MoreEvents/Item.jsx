import React, {useContext} from 'react';
import classNames from 'classnames/bind';

// components
import { Rating } from 'components';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import Link from 'next/link';

//  utils
import { convertToSlug } from 'utils/helper';

// assets
import { Location, Calendar } from '../../../svgs';
import { UserAuthContext } from "context/UserAuthContext";
import styles from './MoreEvents.module.scss';
const cx = classNames.bind(styles);

const Item = ({ data }) => {
  const { userLocation } = useContext(UserAuthContext);
  const getSlug = () =>
    `/${userLocation?.name.replace(/ /g, "-")}/${data.category.replace(/ /g, "-")}/${convertToSlug(data?.name)}/${data?.id}-${data?.timeId}`;
    
  return (
    <Link href={getSlug()}>
      <a className={cx('item')}>
        <div className={cx('img-wrap')}>
          {data?.image ? (
            <Image
              src={
                data?.image.src ||
                `/api/imageproxy?url=${encodeURIComponent(data?.image)}`
              }
              layout='fill'
              alt={data?.name}
              className={cx('main-image')}
              unoptimized
            />
          ) : (
            <Skeleton className={cx('main-image')} />
          )}
          <div className={cx('category')}>{data?.category}</div>
        </div>
        <div className={cx('wrap')}>
          <h4 className={cx('title')}>{data?.name || <Skeleton />}</h4>
          <Rating size='xs' rate={4} />
          <p className={cx('location')}>
            <Location />
            <span>{data?.location}</span>
          </p>
          <p className={cx('start-time')}>
            <Calendar />
            <span>{data?.startTime}</span>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Item;
