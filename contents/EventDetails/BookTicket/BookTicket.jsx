// libraries
import React from 'react';
import classNames from 'classnames/bind';

//assets
import { ChevronRight } from 'svgs';
import Directions from 'svgs/Directions';
import VideoIcon from 'svgs/VideoIcon';

// styles
import styles from './BookTicket.module.scss';

const cx = classNames.bind(styles);

const BookTicket = () => {
  const ticketData = [
    {
      ticketPrice: '$206',
      ticketDate: 'August 12th',
      buttontext: 'Get Ticket',
      icon: false,
      text: false,
    },
    {
      ticketPrice: false,
      ticketDate: false,
      buttontext: 'Book Event',
      icon: false,
      text: 'Only for “Viator” type events',
    },
    {
      ticketPrice: false,
      ticketDate: false,
      buttontext: 'Virtual Link',
      icon: <VideoIcon />,
      text: false,
    },
    {
      ticketPrice: false,
      ticketDate: false,
      buttontext: 'Contact Host',
      icon: false,
      text: 'Email or phone',
    },
    {
      ticketPrice: false,
      ticketDate: false,
      buttontext: 'Get Directions',
      icon: <Directions />,
      text: 'This Event is starting soon',
    },
  ];

  return (
    <div className={cx('booking-info')}>
      <div className={cx('ticket')}>
        {ticketData.map((item, ind) => (
          <div className={cx('get-ticket')} key={ind}>
            <div className={cx('ticket-content')}>
              {item.text ? (
                <p className={cx('ticket-date')}>{item.text}</p>
              ) : item.ticketPrice ? (
                <div className={cx('ticket-info')}>
                  <div>
                    <p className={cx('ticket-text')}>Ticket from /</p>
                    <p className={cx('ticket-price')}>{item.ticketPrice}</p>
                  </div>
                  <p className={cx('ticket-date')}>{item.ticketDate}</p>
                </div>
              ) : (
                <p></p>
              )}
              <div className={cx('get-button')}>
                <p>{item.buttontext}</p>
                {item.icon ? item.icon : null}
              </div>
            </div>
            <ChevronRight width='30px' height='30px' />
          </div>
        ))}
      </div>
      <button className={cx('get-your-ticket')}>Get Ticket</button>
    </div>
  );
};

export default BookTicket;
