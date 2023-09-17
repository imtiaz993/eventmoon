// libraries
import React from 'react';
import classNames from 'classnames/bind';
import { Rating } from 'components';
import Image from 'next/image';
//assets
import { ChevronDown, ChevronRight, Location } from 'svgs';

// styles
import styles from './EventVenue.module.scss';

const cx = classNames.bind(styles);

const EventVenue = ({ data }) => {
  const myLoader=({src})=>{
		return data.VenueImage;
	  }
  const EventData = [
    {
     
      name: 'Justin Biber',
      eventPlace: 'Hartford healthcare Amphitheater',
      eventLocation: 'Boardwalk - Las Vegas, NV',
      eventDay: 'Next Saturday',
      eventDate:'Sep 19',
      eventTime:'Mon . 7:30pm'
    },
    {
     
      name: 'Justin Biber',
      eventPlace: 'Hartford healthcare Amphitheater',
      eventLocation: 'Boardwalk - Las Vegas, NV',
      eventDay: 'Next Saturday',
      eventDate:'Sep 19',
      eventTime:'Mon . 7:30pm'
    },
    {
     
      name: 'Justin Biber',
      eventPlace: 'Hartford healthcare Amphitheater',
      eventLocation: 'Boardwalk - Las Vegas, NV',
      eventDay: 'Next Saturday',
      eventDate:'Sep 19',
      eventTime:'Mon . 7:30pm'
    },
    {
     
      name: 'Justin Biber',
      eventPlace: 'Hartford healthcare Amphitheater',
      eventLocation: 'Boardwalk - Las Vegas, NV',
      eventDay: 'Next Saturday',
      eventDate:'Sep 19',
      eventTime:'Mon . 7:30pm'
    },
  ];
  return (
    <div className={cx('event-venue')}>
      <h1 className={cx('heading')}>Venue</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className={cx('VenueImage')}>
      <Image src={data.VenueImage} loader={myLoader} alt='event venue' width='100%' height={"100%"}/>
      </div>
      <h1 className={cx('location-name')}>{data.LocationDetail.Venue}</h1>
      <div className={cx('event-place')}>
        <Location />
        <p>
          {data.LocationDetail.City} , {data.LocationDetail.State}
        </p>
      </div>
      <button>Follow</button>
      <Rating rate={data?.ratings || data?.Ratings} />
      <p className={cx('rate-head')}>Rate this Event</p>
      <div className={cx('coming-events')}>
        {EventData.map((item, ind) => (
          <div className={cx('future-events')} key={ind}>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className={cx('event-date-wrapper')}>
                <p className={cx('event-date')}>{item.eventDate}</p>
                <p className={cx('event-time')}>{item.eventTime}</p>
              </div>
              <div className={cx('coming-event-details')}>
                <h1>{item.name}</h1>
                <p className={cx('event-place')}>{item.eventPlace}</p>
                <div>
                  <p className={cx('event-location')}>{item.eventLocation}</p>
                  <p className={cx('event-day')}>{item.eventDay}</p>
                </div>
              </div>
            </div>
            <ChevronRight color='#1758FE' height='20px' width='20px' />
          </div>
        ))}
      </div>
      <div className={cx('show-more')}>
        <p>More</p>
        <ChevronRight color='#1758FE' height='20px' width='20px' />
      </div>
    </div>
  );
};

export default EventVenue;
