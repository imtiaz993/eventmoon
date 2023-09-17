// libraries
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames/bind';

// styles
import styles from './ShowTime.module.scss';

// assets
import ChevronRight from '../../../svgs/ChevronRight';

const cx = classNames.bind(styles);

const ShowTimeItem = ({ item }) => {
  return (
    <div className={cx('ticket')}>
      <div className={cx('time-info')}>
        <h5>{item?.Day ? item?.Day?.substring(0, 3) : <Skeleton />}</h5>
        <h4>
          {item?.Date ? (
            <>
              {item?.Month?.substring(0, 3)} {item?.Date?.substring(0, 2)}
            </>
          ) : (
            <Skeleton />
          )}
        </h4>
        <h5>{item?.Time ? item?.Time : <Skeleton />}</h5>
      </div>
      <div className={cx('location-info')}>
        <div>
          <h4>{item?.EventName ? item?.EventName : <Skeleton />}</h4>
          <h5>
            {item?.Description !== undefined ? item?.Description : <Skeleton />}
          </h5>
          <h6>{item?.Location ? item?.Location : <Skeleton />}</h6>
        </div>
        {item?.EventName && <ChevronRight className={cx('chevron-right')} />}
      </div>
    </div>
  );
};

export default ShowTimeItem;
