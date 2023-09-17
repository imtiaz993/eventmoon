import React, { useState } from 'react';
import { useDebounce, useSearchEvents } from 'hooks';
import classNames from 'classnames/bind';

import Search from '../../../../svgs/Search';
import X from '../../../../svgs/X';
import Loader from '../../../../svgs/Loader';

import styles from './SearchInput.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);
let timer = null;

const SearchInput = ({
  isClose,
  wrapperClass,
  handleDone,
  userLocation,
  handleClose,
}) => {
  const isFlag = false;
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);

  useSearchEvents(debouncedValue, userLocation, !!userLocation, (data) => {
    handleDone(data);
  });

  const onClose = () => {
    setValue('');
    handleClose();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={cx('search-input-root', wrapperClass)}>
      <Search />
      <input
        type='text'
        placeholder='Search event name'
        onChange={handleChange}
        value={value}
      />
      {isFlag && (
        <span className={cx('loader-wrapper')}>
          <Loader />
        </span>
      )}
      {isClose && <X onClick={onClose} />}
    </div>
  );
};

export default SearchInput;
