import classNames from 'classnames/bind';

// components
import { RatingComponent } from '..';
import Review from './Review';

// styles
import styles from './styles.module.scss';

//assets
import Star from '../../../../svgs/Star';

const cx = classNames.bind(styles);

const Reviews = () => {
  const rate = 4.2;

  return (
    <div className={cx('reviews-root')}>
      <div className={cx('summary')}>
        <div>
          <h1 className={cx('heading')}>Reviews</h1>
          <div className={cx('rating-text')}>{rate}</div>
          <RatingComponent className={cx('rating')} rate={rate} />
        </div>
        <a className={cx('rate-btn')} href='#'>
          <Star fillcolor='#FFC107' />
          <span>Rate event</span>
        </a>
      </div>
      <div className={cx('reviews')}>
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
