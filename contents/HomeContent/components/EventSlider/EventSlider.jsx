import { useEffect } from 'react';
import classNames from 'classnames/bind';

import { EventItem, Heading, NoItemsFound, Slider } from 'components';

import { toEventFormat } from 'utils/helper';

import styles from './EventSlider.module.scss';

const cx = classNames.bind(styles);
let filterList = [];

const EventSlider = ({ heading, list, to, handleClick, error }) => {
  const isAdvertisement = (_data) => {
    if (_data.isadvertisement || _data.Advertisement) return true;

    return false;
  };

  if (list?.length > 0 && !list[0].id) {
    filterList = list.filter((item) => !isAdvertisement(item));
  } else {
    filterList = list;
  }

  return (
    <div className={cx('event-slider-root')}>
      <Heading title={heading} to={to} handleClick={handleClick} />
      {!error && list?.length ? (
        <Slider
          list={filterList}
          Item={ItemWrapper}
          wrapperClass={cx('event-slider-wrapper')}
          slideClass={cx('max-w')}
          classname={cx('event-wrapper')}
          space={16}
          perView='auto'
          perGroup={1}
          navigation
          center
          breakpoints={{
            640: {
              centeredSlides: false,
            },
            768: {
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
        />
      ) : (
        <NoItemsFound heading={heading} />
      )}
    </div>
  );
};

function ItemWrapper({ data }) {
  return (
    <EventItem data={toEventFormat(data)} classname={cx('event-wrapper')} />
  );
}

export default EventSlider;
