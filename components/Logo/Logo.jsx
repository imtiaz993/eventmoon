import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './Logo.module.scss';
const cx = classNames.bind(styles);

const Logo = ({ wrapperClass }) => {
  return (
    <div className={cx('logo-root', wrapperClass)}>
      <Link href='/'>
        <a>
          <Image
            src='/assets/images/logo.svg'
            alt='...'
            width={160}
            height={45}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
