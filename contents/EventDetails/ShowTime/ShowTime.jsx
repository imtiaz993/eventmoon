// libraries
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';

// component
import Item from './Item';
import { Button } from 'components';

// mockup
import mockup from 'utils/data2';

// styles
import styles from './ShowTime.module.scss';
const cx = classNames.bind(styles);

const ShowTime = ({ data }) => {
  const [list, setList] = useState(mockup.empty_3);
  const [showMore, setShowMore] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    if (data) setList(data.Slots);
  }, [data]);

  const toggle = () => setShowMore(!showMore);
  const toggleFollow = () => setIsFollow(!isFollow);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cx('tickets-root')}
    >
      <div className={cx('head')}>
        <div className={cx('venue-content')}>
        
          <div className={cx('venue-img')} />
          <div>
            <p className={cx('venue-title')}>
              {data?.locationDetail?.venue || data?.locationDetail?.city}
            </p>
            {data && (
              <p className={cx('venue-follow', { following: isFollow })}>
                {!isFollow
                  ? '22 people are following'
                  : 'you and 22 others are following'}
              </p>
            )}
          </div>
        </div>
        <Button
          wrapperClass={cx('btn-follow')}
          onClick={toggleFollow}
          label={!isFollow ? 'Follow' : 'Following'}
        />
      </div>
      <div className={cx('ticket-wrapper')}>
        {list && (
          <>
            {(list?.length > 2 && !showMore
              ? list.slice(0, list?.length)
              : list
            )?.map((item, index) => (
              <Item key={index} item={item} />
            ))}
            {list?.length > 2 && (
              <span className={cx('more')} onClick={toggle}>
                {!showMore ? 'show more' : 'show less'}
              </span>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ShowTime;
