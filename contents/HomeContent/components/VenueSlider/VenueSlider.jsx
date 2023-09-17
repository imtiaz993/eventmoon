import React from 'react';
import classNames from 'classnames/bind';
import { useNoScroll, useIsMob } from 'hooks';
import { Heading, Slider } from 'components';
import VenueItem from './VenueItem';

import styles from './VenueSlider.module.scss';
import UpcomingEventCard from './UpcomingEventCard';

const cx = classNames.bind(styles);

const VenueSlider = () => {
  const isMob = useIsMob(1024);
  return (
    <div className={cx('venue-slider-root')}>
      <div className={cx('card-flex')}>
        <Heading title='Venues near me' to='#' />
        <UpcomingEventCard />
      </div>
      {!isMob && (
        <div className={cx('venue-item-cards')}>
          <VenueItem />
          <VenueItem isTomorrow={true} />
          <VenueItem />
        </div>
      )}

      {isMob && (
        <Slider
          list={[...new Array(3).fill({})]}
          Item={VenueItem}
          wrapperClass={cx('venue-slider-wrapper')}
          slideClass={cx('max-w')}
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
      )}
    </div>
  );
};

export default VenueSlider;
