import classNames from 'classnames/bind';

// components
import SearchResult from './SearchResult';

// styles
import styles from './SearchResults.module.scss';

const cx = classNames.bind(styles);

const SearchResults = ({ results, searchTerm, isLoading, error }) => {
  return (
    <div className={cx('search-results-root')}>
      <div className={cx('info')}>
        <div className={cx('count')}>Displaying {results?.length} results</div>
        <h2>
          Your Search results for{' '}
          <span className={cx('search-term')}>&ldquo;{searchTerm}&rdquo;</span>
        </h2>
      </div>
      <div className={cx('results')}>
        {!isLoading ? (
          !!results?.length && !error ? (
            results.map((result, i) => <SearchResult data={result} key={i} />)
          ) : (
            <div className={cx('not-found')}>
              <h2>Not Found</h2>
              <div>No Search results for &ldquo;{searchTerm}&rdquo;</div>
            </div>
          )
        ) : (
          Array.from(Array(5)).map((_, i) => <SearchResult isLoading key={i} />)
        )}
      </div>
    </div>
  );
};

export default SearchResults;
