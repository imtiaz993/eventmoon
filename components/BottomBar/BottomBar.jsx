import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

//assets
import HalfMoon from '../../svgs/HalfMoon';
import EventMap from '../../svgs/EventMap';
import Bell from '../../svgs/Bell';
import Search from '../../svgs/Search';

// styles
import styles from './BottomBar.module.scss';
const cx = classNames.bind(styles);

let YOldValue = 0;
let YNewValue = 0;
let offset = '80px';

const BottomBar = ({ openNotifications }) => {
  const router = useRouter();

  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    YNewValue = window.pageYOffset;
    if (YNewValue > YOldValue) {
      setShow(false);
      offset = '30px';
    } else {
      setShow(true);
      offset = '80px';
    }
    YOldValue = YNewValue;

    // bottom offset of plane widget
    document.documentElement.style.setProperty('--bottom-offset', `${offset}`);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0, transition: { duration: 0.35, type: 'tween' } }}
          exit={{
            y: 100,
            transition: { delay: 0.1, duration: 0.25, type: 'tween' },
          }}
          className={cx('bottom-bar-root')}
          id='bottom-bar'
        >
          <div className={cx('bar-wrapper')}>
            <div className={cx('bg-bar')}>
              <Image
                src='/assets/images/bottom-bg.svg'
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={cx('section')}>
              <Link href='/'>
                <a
                  className={cx('icon-wrapper', 'home-icon', {
                    active: router.asPath === '/',
                  })}
                >
                  <HalfMoon />
                  <span>Home</span>
                </a>
              </Link>
              <Link href='/map'>
                <a
                  className={cx('icon-wrapper', 'map-icon', {
                    active: router.asPath === '/map',
                  })}
                >
                  <EventMap />
                  <span>Event Map</span>
                </a>
              </Link>
            </div>
            <div className={cx('section', 'to-end')}>
              <Link href='/search'>
                <a
                  className={cx('icon-wrapper', {
                    active: router.asPath === '/search',
                  })}
                >
                  <Search />
                  <span>Search</span>
                </a>
              </Link>
              <div
                className={cx('icon-wrapper', 'notify-icon')}
                onClick={openNotifications}
              >
                <Bell />
                <span>Notification</span>
                {/* <span className={cx("count")}>2</span> */}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomBar;
