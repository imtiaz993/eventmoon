import classNames from 'classnames/bind';

// components
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { Pill } from 'components';

// assets
import { CalendarFill, Location, Walk } from '../../../../svgs';

// style
import styles from './SearchResults.module.scss';

const cx = classNames.bind(styles);

const SearchResult = ({ data, isLoading }) => {
  if (isLoading) return <SkeletonComponent />;
  return (
    <div className={cx('search-result-root')}>
      <div className={cx('info')}>
        <h2 className={cx('name')}>{data.EventName}</h2>
        <div className={cx('date')}>
          <CalendarFill /> <span>{'Tonight 12:00 AM'}</span>
        </div>
        <div className={cx('location')}>
          <Location />{' '}
          <span>
            {data.VenueName}, {data.City}, {data.State}
          </span>
        </div>
        <div className={cx('distance')}>
          <Walk /> <span>{data.Distance} mile(s) away</span>
        </div>
        <Link href='#'>
          <a className={cx('see-event-details')}>See event details</a>
        </Link>
      </div>
      <div className={cx('img-wrapper')}>
        <Image
          src={`/api/imageproxy?url=${encodeURIComponent(data.Image)}`}
          alt={data.EventName}
          layout='fill'
          objectFit='cover'
        />
        <Pill label={'Club Party'} position={'top-right'} />
      </div>
    </div>
  );
};

const SkeletonComponent = () => (
  <div className={cx('search-result-root', 'skeleton')}>
    <div className={cx('info')}>
      <h2 className={cx('name')}>
        <Skeleton />
      </h2>
      <Skeleton className={cx('date')} />
      <Skeleton className={cx('location')} />
      <Skeleton className={cx('distance')} />
    </div>
    <Skeleton className={cx('img-wrapper')} />
  </div>
);

export default SearchResult;
