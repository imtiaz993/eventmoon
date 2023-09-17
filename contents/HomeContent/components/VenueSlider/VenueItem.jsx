import classNames from 'classnames/bind';

// components
import { Pill } from 'components';
import Link from 'next/link';
import Image from 'next/image';

// assets
import { Walk, Location, CalendarFill } from '../../../../svgs';

// styles
import styles from './VenueSlider.module.scss';

const cx = classNames.bind(styles);

const VenueItem = ({ isTomorrow }) => {
  return (
    <Link href='/'>
      <a>
        <div className={cx('venue-item')}>
          <div className={cx('image-wrapper')}>
            {isTomorrow && (
              <p className={cx('is-tomorrow')}>1 event happening tomorrow </p>
            )}
            {!isTomorrow && (
              <p className={cx('today-text')}>2 events happening today </p>
            )}

            <Image
              src='/assets/images/placeholder-event.png'
              alt='...'
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div className={cx('main')}>
            <div className={cx('icon-wrapper')}>
              <div>
                {' '}
                <span className={cx('icon')}>
                  <CalendarFill />
                </span>
                <span className={cx('title')}>The airlines arena</span>
              </div>
              <div>
                {' '}
                <span className={cx('icon')}>
                  <Location />
                </span>
                <span className={cx('label')}>
                  23 American way New York NY 275429
                </span>
              </div>
              <div>
                <span className={cx('icon')}>
                  <Walk />
                </span>
                <span className={cx('label')}>2 miles</span>
              </div>
            </div>
            <div className={cx('follow-button')}>
              <button>Following</button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VenueItem;
