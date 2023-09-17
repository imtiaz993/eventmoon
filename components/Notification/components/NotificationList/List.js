import React from 'react';
import classNames from 'classnames/bind';

// components
import Item from './Item';

import styles from './NotificationList.module.scss';
const cx = classNames.bind(styles);

const List = ({ title, list }) => {
  return (
    <div className={cx('list')}>
      <div className={cx('head')}>
        <span>{title}</span>
        <span>{list?.length}</span>
      </div>
      <ul>
        {list.map((item, i) => (
          <Item key={i} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
