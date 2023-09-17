import classNames from 'classnames/bind';

// components
import { Section, Heading, Navbar } from 'components';
import { SearchResults, Slider, Suggestions } from './components';
import Link from 'next/link';

// hooks
import { useContext, useState } from 'react';
import { useSearchEvents } from 'hooks';

// context
import { UserAuthContext } from 'context/UserAuthContext';

// assets
import Search from '../../svgs/Search';

import styles from './NotFound.module.scss';
const cx = classNames.bind(styles);

const NotFound = () => {
  const { userLocation } = useContext(UserAuthContext);

  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, error } = useSearchEvents(
    searchTerm,
    userLocation,
    !!userLocation
  );

  return (
    <div>
      <Navbar />
      <Section>
        <div className={cx('not-found-root')}>
          <SearchResults
            results={data?.Events || []}
            isLoading={isLoading}
            error={error}
            searchTerm={searchTerm}
          />
          <div className={cx('message')}>
            <h2>The page you were looking for doesn't exist.</h2>
            <p>The search below should help!</p>
          </div>
          <div className={cx('search-section')}>
            <form
              className={cx('search-wrapper')}
              onSubmit={(event) => {
                event.preventDefault();
                setSearchTerm(
                  event.target.querySelector('input[name=searchTerm]').value
                );
                return false;
              }}
            >
              <Search />
              <input
                type='text'
                name='searchTerm'
                placeholder='Search event name '
              />
              <button type='submit'>Search</button>
            </form>
            <div className={cx('divider')}>
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className={cx('btn-wrapper')}>
              <Link href='/'>
                <a>
                  <button>Go to Homepage</button>
                </a>
              </Link>
            </div>
          </div>
          <Suggestions
            eventDestinations={data?.EventDestinations}
            venues={data?.venues}
          />
          <Heading
            title={'More Interesting Events'}
            wrapperClass={cx('heading')}
          />
        </div>
        <Slider />
      </Section>
    </div>
  );
};

export default NotFound;
