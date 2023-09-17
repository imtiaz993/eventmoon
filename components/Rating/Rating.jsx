import React from 'react';
import classNames from 'classnames/bind';
import Rating from 'react-rating';

import Star from '../../svgs/Star';

import styles from './Rating.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

const RatingComponent = ({
  rate = 0,
  wrapperClass,
  size = 'base',
  readonly = true,
  height,
  width,
  ...rest
}) => {
  return (
    <div className={cx('rating-root', size, wrapperClass)}>
      <Rating
        initialRating={parseFloat(rate).toFixed(1)}
        emptySymbol={
          <Star
            fillcolor='#e6e6e6'
            height={height || '30px'}
            width={width || '31px'}
          />
        }
        fullSymbol={
          <Star
            fillcolor='#FFC107'
            height={height || '30px'}
            width={width || '31px'}
          />
        }
        readonly={readonly}
        {...rest}
      />
    </div>
  );
};

export default RatingComponent;
