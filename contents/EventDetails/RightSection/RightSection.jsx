import classNames from 'classnames/bind';

// components
import TrendingBanner from './TrendingBanner';
import Location from './Location';
import StartTime from './StartTime';
import Miles from './Miles';

// assets
import TicketIcon from '../../../svgs/TicketIcon';

// styles
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const RightSection = ({ data }) => {
  return (
    <div className={cx('right-section')}>
      {data && (
        <div className={cx('ticket-from')}>
          <TicketIcon className={cx('icon')} />
          <span>
            Ticket from /{' '}
            <span className={cx('price')}>${data?.TicketPrice}</span>
          </span>
        </div>
      )}
      <div className={cx('sticky-component')}>
        <TrendingBanner data={data} cx={cx} />
        <Location data={data} cx={cx} />
        <StartTime data={data} cx={cx} />
        <Miles data={data} cx={cx} />
        {data && (
          <a className={cx('get-ticket')} href='#'>
            Get Ticket
          </a>
        )}
      </div>
    </div>
  );
};

export default RightSection;
