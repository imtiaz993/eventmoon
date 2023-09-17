import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

//assets
import Telescope from '../../svgs/Telescope';

import styles from './FAB.module.scss';
const cx = classNames.bind(styles);

const Fab = ({ handleClick }) => {
  return (
    <div className={cx('fab-root')} onClick={handleClick}>
      <Telescope />
    </div>
  );
};

export default Fab;
