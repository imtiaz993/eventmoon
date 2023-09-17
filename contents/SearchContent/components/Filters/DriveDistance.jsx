import classNames from 'classnames/bind';
import { useState } from 'react';

// styles
import styles from './Filters.module.scss';

// components
import { Range, getTrackBackground } from 'react-range';

// assets
import Car from '../../../../svgs/Car';

const cx = classNames.bind(styles);

const renderTrack = ({ value, min, max }, { props, children }) => (
  <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart}>
    <div
      ref={props.ref}
      className={cx('track')}
      style={{
        background: getTrackBackground({
          values: [value],
          colors: ['var(--color-gray-4)', '#EEEEEE'],
          min,
          max,
        }),
      }}
    >
      {children}
    </div>
  </div>
);

const renderThumb = (value, { props }) => (
  <div {...props} className={cx('thumb')}>
    <div className={cx('drive-icon')}>
      <Car className={cx('icon')} />
      <span>Drive</span>
    </div>
    <div className={cx('label')}>{value} miles</div>
  </div>
);

const DriveDistance = ({ value, setValue, min = 0, max = 300 }) => {
  return (
    <div className={cx('drive-distance')}>
      <div className={cx('range-wrapper')}>
        <Range
          values={[value]}
          min={0}
          max={300}
          step={1}
          renderTrack={(params) => renderTrack({ value, min, max }, params)}
          renderThumb={(params) => renderThumb(value, params)}
          onChange={([value]) => {
            setValue(value);
          }}
        />
      </div>

      <div className={cx('min-max')}>
        <span>{min} miles</span>
        <span>{max} miles</span>
      </div>
    </div>
  );
};

export default DriveDistance;
