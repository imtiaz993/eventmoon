import classNames from 'classnames/bind';

// assets
import { Fire, Location, Calendar, Share, Bell } from '../../../svgs';

// components
import { Button, Pill } from 'components';
import Image from 'next/image';

// styles
import styles from './ComingSoon.module.scss';

const cx = classNames.bind(styles);

const Item = () => {
  return (
    <div className={cx('trending-item')}>
      <div className={cx('img-section')}>
        <Image
          src='/assets/images/placeholder-event.png'
          alt='trending'
          layout='fill'
          objectFit='cover'
        />
        <Pill label='Concert' position='top-center' />
      </div>
      <div className={cx('info-section')}>
        <div className={cx('item-upper')}>
          <h3>New jersy Jackals at Ran...</h3>
          <span className={cx('tag')}>
            <Fire />
            <span>Trending</span>
          </span>
        </div>
        <div className={cx('item-mid')}>
          <span className={cx('icon-wrapper')}>
            <Location />
            <span>New Haven Museum sdv...</span>
          </span>
          <span className={cx('icon-wrapper')}>
            <Calendar />
            <span>Tonight 12:00 AM</span>
          </span>
        </div>
        <div className={cx('item-lower')}>
          <Button label='Notify Me' Prefix={<Bell />} />
          <Share />
        </div>
      </div>
    </div>
  );
};

export default Item;
