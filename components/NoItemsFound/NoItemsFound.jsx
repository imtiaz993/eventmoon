import classNames from 'classnames/bind';

// styles
import styles from './NoItemsFound.module.scss';
import Image from 'next/image';

//assets
import CalendarFill from '../../svgs/CalendarFill';

const cx = classNames.bind(styles);

const NoItemsFound = ({ heading }) => {
  return (
    <div className={cx('no-items-found-root')}>
      <CalendarFill />
      <p>No events found for {heading}</p>
    </div>
  );
};

export default NoItemsFound;
