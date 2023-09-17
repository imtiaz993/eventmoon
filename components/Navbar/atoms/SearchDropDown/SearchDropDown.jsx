import React from 'react';
import classNames from 'classnames/bind';

// components
import EventItem from './EventItem';

import styles from './SearchDropDown.module.scss';
const cx = classNames.bind(styles);

const SearchDropDown = ({ isOpen, data }) => {
  return (
    <React.Fragment>
      {isOpen && (
        <div className={cx('search-drop-down-root')}>
          {data && data?.length > 0 ? (
            data.map((item, i) => <EventItem key={i} data={item} />)
          ) : (
            <p className={cx('no-found')}>Nothing Found</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchDropDown;
