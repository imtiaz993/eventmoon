//libraries
import React from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './MobileWrapper.module.scss';
const cx = classNames.bind(styles);

const MobileWrapper = ({ children }) => {
  return <div className={cx('mobile-wrapper')}>{children}</div>;
};

export default MobileWrapper;
