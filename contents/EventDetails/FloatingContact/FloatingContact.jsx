//libraries
import React from 'react';
import classNames from 'classnames/bind';

//styles
import styles from './FloatingContact.module.scss';
import { Telephone } from 'svgs';

const cx = classNames.bind(styles);

const FloatingContact = () => {
  return (
    <div className={cx('floating-contact')}>
      <button>
        <Telephone width='45px' height='45px' color='#1758FE' />
      </button>
      <p>Contact Host</p>
    </div>
  );
};

export default FloatingContact;
