// libraries
import React from 'react';
import classNames from 'classnames/bind';

// components
import EventImage from './EventImage/EventImage';
import EventDescription from './EventDescription/EventDescription';
import EventRating from './EventRating/EventRating';

// styles
import styles from './EventBanner.module.scss';
const cx = classNames.bind(styles);

const EventBanner = ({ data }) => {
  return (
    <div className={cx('EventBanner-root')}>
      <EventImage data={data} />
      <div className={cx('event-content')}>
        <EventDescription data={data} />
        <EventRating data={data} />
      </div>
    </div>
  );
};

export default EventBanner;
