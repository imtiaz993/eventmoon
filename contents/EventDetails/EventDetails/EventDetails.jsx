// libraries
import React, { useState } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './EventDetails.module.scss';
const cx = classNames.bind(styles);

const EventDetails = ({data}) => {
  const [showMore, setShowMore] = useState(false);

  const keywords = [
    'Diwalifestival',
    'Live music',
    'Events in India',
    'Holy',
    'Fireworks',
  ];

  return (
    <div className={cx('event-details')}>
      <h1>Details</h1>
      {!showMore? <p>
       {data.Description.split('.')[0]}.
      </p>:null}
     
      {showMore ? (
        <>
        <br/>
          <p>
          {data.Description}
          </p>

          <h2>Keywords</h2>
          <div className={cx('keyword')}>
            {keywords.map((item, ind) => (
              <div key={ind}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'show less' : 'show more'}
      </button>
    </div>
  );
};

export default EventDetails;
