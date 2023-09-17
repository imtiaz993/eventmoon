import React from 'react';
import Link from 'next/link';
import { PlayStore, AppStore } from '../../../../svgs';
// libraries
import classNames from 'classnames/bind';

// styles
import styles from './eventmooner.module.scss';

const cx = classNames.bind(styles);

const Eventmooner = () => {
  return (
    <div className={cx('eventmooner-wrapper')}>
      <h1 className={cx('heading')}>Become a Eventmooner</h1>
      <p className={cx('sub-heading')}>
        <Link href='/'>
          <a>Log in</a>
        </Link>{' '}
        to save your notifications or{' '}
        <Link href='/'>
          <a>click to sync</a>
        </Link>{' '}
        your events to the app
      </p>
      <div className={cx('apps-store')}>
        <Link
          href='https://play.google.com/store/apps/details?id=com.music_event_app&hl=en_US&gl=US'
          target='_blank'
          rel='noreferrer'
        >
          <a>
            <PlayStore />
          </a>
        </Link>
        <Link
          href='https://apps.apple.com/us/app/event-moon/id1317300725'
          target='_blank'
          rel='noreferrer'
        >
          <a>
            <AppStore />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Eventmooner;
