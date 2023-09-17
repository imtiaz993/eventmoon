import classNames from 'classnames/bind';

// assets
import { Megaphone, ArrowDown } from '../../../svgs';

// styles
import styles from './Share.module.scss';
const cx = classNames.bind(styles);

const Share = () => {
  return (
    <div className={cx('share-wrapper')}>
      <Megaphone className={cx('megaphone')} />
      <p>Share the app</p>
      <div className={cx('circle')}>
        <ArrowDown className={cx('icon')} />
      </div>
    </div>
  );
};

export default Share;
