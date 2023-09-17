// icons
import Calendar from '../../../svgs/Calendar';

//components
import Skeleton from 'react-loading-skeleton';

const StartTime = ({ data, cx }) => {
  return data?.StartTime ? (
    <div className={cx('start-time')}>
      <Calendar className={cx('icon')} />
      <span>{data?.StartTime}</span>
    </div>
  ) : (
    <Skeleton className={cx('trending_date')} />
  );
};

export default StartTime;
