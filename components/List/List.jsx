// libraries
import React from 'react';
import classNames from 'classnames/bind';

// components
import { EventItem, Ad, NoItemsFound } from 'components';

// helper
import { toAdFormat } from './util';
import { toEventFormat } from 'utils/helper';

// styles
import styles from './List.module.scss';
const cx = classNames.bind(styles);

const List = ({ items, limit, heading }) => {
  const checkForAd = (_data) => {
    if (_data.isadvertisement || _data.Advertisement) return true;

    return false;
  };

  const adFormat = (_data) => {
    if (_data.isadvertisement) {
      return toAdFormat(_data);
    } else {
      return toAdFormat(_data.Advertisement);
    }
  };

  return (
    <div className={cx('list_wrap')}>
      {items?.length > 0 ? (
        <div className={cx('items')}>
          {(limit ? items?.slice(0, 4) : items)?.map((item, index) =>
            checkForAd(item) ? (
              <Ad key={index} data={adFormat(item)} />
            ) : (
              <EventItem key={index} data={toEventFormat(item)} index={index} />
            )
          )}
        </div>
      ) : (
        <NoItemsFound heading={heading} />
      )}
    </div>
  );
};

export default List;
