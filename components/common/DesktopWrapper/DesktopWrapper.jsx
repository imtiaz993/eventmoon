//libraries
import React from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './DesktopWrapper.module.scss';
const cx = classNames.bind(styles);

const DesktopWrapper = ({ children }) => {
  return <div className={cx('desktop-wrapper')}>{children}</div>;
};

export default DesktopWrapper;
