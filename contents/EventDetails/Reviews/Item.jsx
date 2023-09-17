import { useState } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './Reviews.module.scss';

// components
import Image from 'next/image';
import { Rating } from 'components';

const cx = classNames.bind(styles);

const Item = ({ data }) => {
  const [isError, setIsError] = useState(false);

  const getName = () => {
    return data.Name === '' ? 'username' : data.Name;
  };

  return (
    <div className={cx('review')}>
      <Image
        // src={!isError ? data.UserImagePath : placeholderImage}
        src='/assets/images/avatar-1.png'
        alt='review'
        className={cx('profile-picture')}
        objectFit='cover'
        onError={() => {
          setIsError(true);
        }}
      />
      <div>
        <h5>{getName()}</h5>
        <div className={cx('inner-stars')}>
          <Rating rate={parseFloat(data.Ratings).toFixed(1)} />
        </div>
        <h6>{data.PostedDate}</h6>
        <p>{data.ReviewText}</p>
      </div>
    </div>
  );
};

export default Item;
