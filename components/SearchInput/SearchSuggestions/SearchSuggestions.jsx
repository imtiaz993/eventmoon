import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

// hooks
import { useSearchEvents } from 'hooks';

// components
import Image from 'next/image';
import Link from 'next/link';
import SearchSuggestion from './SearchSuggestion';
import EventDestinations from './EventDestinations';
import SvgLocation from 'svgs/Location';

// utils
import { handleOverflow } from 'utils/helper';

// assets
import History from '../../../svgs/History';
import { convertToSlug } from 'utils/helper';

// data
import { variants, children_variants } from './data';

// styles
import styles from './SearchSuggestions.module.scss';

const cx = classNames.bind(styles);

const SearchSuggestions = ({
  setSearchTerm,
  searchTerm,
  shown,
  userLocation,
  searchParams,
  setSearchParams,
  setInFocus,
}) => {
  const recentSearches = ['Las vegas', 'New York', 'Promised Neverland'];

  // const { data, isLoading } = useSearchEvents('', userLocation, !!userLocation);

  const getSlug = (_event) => {
    return `/${convertToSlug(_event.EventName)}/${_event.EventId}/${
      _event.TimeId
    }`;
  };

  return (
    <AnimatePresence>
      {!searchTerm && shown && (
        <motion.ul
          initial='hidden'
          animate='shown'
          exit={searchTerm?.length && 'hidden'}
          className={cx('dropdown')}
          onClick={() => {
            setInFocus(true);
          }}
        >
          <motion.li
            variants={children_variants}
            className={cx('recent-searches')}
          >
            <div className={cx('search-options')}>
              <div>
                <p className={cx('label')}>Departure</p>

                <input
                  type='date'
                  value={searchParams?.departure}
                  onChange={(event) => {
                    setSearchParams({
                      ...searchParams,
                      departure: event.target.value,
                    });
                  }}
                />
              </div>
              <div className={cx('bar')}></div>
              <div>
                <p className={cx('label')}>Return</p>
                <input
                  type='date'
                  value={searchParams?.end}
                  onChange={(event) => {
                    setSearchParams({
                      ...searchParams,
                      end: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className={cx('search-fields')}>
              <p className={cx('label')}>Event Location </p>
              <div className={cx('search-location')}>
                <SvgLocation />
                <select>
                  <option>New York</option>
                  <option>London</option>
                  <option>Peris</option>
                  <option>Moscow</option>
                </select>
              </div>
            </div>

            {/* <h3>Recent Searches</h3> */}

            {/* {recentSearches.map((value, i) => (
              <SearchSuggestion
                wrapperClass={'option'}
                setSearchTerm={setSearchTerm}
                value={value}
                key={i.toString()}
              >
                <History />
                <span>{value}</span>
              </SearchSuggestion>
            ))} */}
          </motion.li>
          {/* <motion.li variants={children_variants} className={cx('events')}>
            <div className={cx('group-heading')}>Events</div>
            {data?.Events.map((event, i) => (
              <Link href={getSlug(event)} key={i.toString()}>
                <a className={cx('event')}>
                  <Image
                    src={`/api/imageproxy?url=${encodeURIComponent(
                      event.Image
                    )}`}
                    width={80}
                    height={45}
                    alt={event.EventName}
                  />
                  <div className={cx('info')}>
                    <span className={cx('name')}>
                      {handleOverflow(event.EventName, 26)}
                    </span>
                    <div>
                      <span className={cx('city')}>
                        {event.City || 'Las Vegas'}
                      </span>
                      <span className={cx('distance')}>
                        {event.Distance || '0'} miles away
                      </span>
                    </div>
                  </div>
                  <span className={cx('genre')}>
                    {event.EventCategory || 'Family'}
                  </span>
                </a>
              </Link>
            ))}
          </motion.li> 
          <EventDestinations
            setSearchTerm={setSearchTerm}
            data={data}
            isLoading={isLoading}
          />*/}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SearchSuggestions;
