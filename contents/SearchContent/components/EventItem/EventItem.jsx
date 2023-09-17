
import React, {useContext} from 'react';
import classNames from 'classnames/bind';
import { UserAuthContext } from "context/UserAuthContext";
// components
import Image from 'next/image';
import Link from 'next/link';
import { Button, Pill } from 'components';

// hooks
import { useEventDetails } from 'hooks';

// styles
import styles from './EventItem.module.scss';

// utils
import { convertToSlug } from 'utils/helper';

// assets
import { CalendarFill, NotificationRounded, MapPin } from '../../../../svgs';

const cx = classNames.bind(styles);

const EventItem = ({ data }) => {
  const { userLocation } = useContext(UserAuthContext);
  const getSlug = () => {
    if (Object.entries(data)?.length > 0) {
      let slug = convertToSlug(data.EventName);
      return `/${userLocation?.name.replace(/ /g, "-")}/${data.CategoryName.replace(/ /g, "-")}/${slug.replace(/ /g, "-")}/${data.EventId}-${data.TimeId}`;
    }
    return '#';
  };

  return (
    <div className={cx('event-item-root')}>
      <Link href={getSlug()}>
        <a className={cx('event-item-inner')}>
          <div className={cx('event-details')}>
            <h3 className={cx('name')}>{data?.EventName}</h3>
            <div className={cx('date')}>
              <CalendarFill className={cx('icon')} />
              <span>{data?.StartTime}</span>
            </div>
            <div className={cx('location')}>
              <MapPin className={cx('icon')} />
              <p>
                {data &&
                  data.Location.slice(0, 27) +
                    (data.Location?.length > 27 ? '...' : '')}
              </p>
            </div>
            <Button
              label='Notify Me'
              Prefix={<NotificationRounded />}
              prefixClass={cx('icon')}
              wrapperClass={cx('notify-btn')}
            />
          </div>
          <div className={cx('event-image')}>
            <Image
              src={data.Image}
              objectPosition='50% 20%'
              unoptimized
              alt={data?.EventName}
              layout='fill'
              objectFit='cover'
              className={cx('inner')}
            />
            {/* <Image
              src={`/assets/images/searchs_img.png`}
              alt='//'
              layout='fill'
              objectFit='cover'
              className={cx('inner')}
            /> */}
            <Pill label='Concert' position='top-center' />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EventItem;
