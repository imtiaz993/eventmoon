import classNames from 'classnames/bind';

// styles
import styles from './Suggestions.module.scss';

// components
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

const events = Array(4).fill({
  city: 'las vegas',
  state: 'Nevada',
  image: '/assets/images/placeholder-city.png',
});
const venues = Array(4).fill({
  name: 'Casino',
  state: 'Nevada',
  distance: '15',
  image: '/assets/images/placeholder-event.png',
});

const Suggestion = ({
  image,
  title,
  subTitle,
  distance,
  isLoading = false,
  wrapperClass,
}) => {
  if (isLoading)
    return (
      <div className={cx('suggestion-root', 'skeleton', wrapperClass)}>
        <Skeleton className={cx('img-wrapper')} />
        <div className={cx('info')}>
          <Skeleton className={cx('title')} />
          <Skeleton className={cx('sub-title')} />
        </div>
      </div>
    );
  return (
    <div className={cx('suggestion-root', wrapperClass)}>
      <div className={cx('img-wrapper')}>
        <Image src={image} alt={title} layout='fill' objectFit='cover' />
      </div>
      <div className={cx('info')}>
        <span className={cx('title')}>{title}</span>
        <div className={cx('extra')}>
          <span className={cx('sub-title')}>{subTitle}</span>
          {distance && (
            <span className={cx('distance')}>{distance} miles away</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Suggestions = ({ eventDestinations, count = 4 }) => {
  return (
    <div className={cx('suggestions-root')}>
      <div className={cx('events')}>
        <h3 className={cx('heading')}>Event destinations</h3>
        <div className={cx('list')}>
          {eventDestinations
            ? eventDestinations
                .slice(0, count)
                .map(({ Image, Location, Name }, i) => (
                  <Suggestion
                    title={Name}
                    subTitle={Location}
                    image={Image}
                    key={i}
                  />
                ))
            : Array.from(Array(count)).map((_, i) => (
                <Suggestion isLoading key={i} />
              ))}
        </div>
      </div>
      <div className={cx('venues')}>
        <h3 className={cx('heading')}>Venues near me</h3>
        <div className={cx('list')}>
          {venues
            ? venues
                .slice(0, count)
                .map(({ name, state, distance, image }, i) => (
                  <Suggestion
                    title={name}
                    subTitle={state}
                    distance={distance}
                    image={image}
                    key={i}
                  />
                ))
            : Array.from(Array(count)).map((_, i) => (
                <Suggestion isLoading key={i} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
