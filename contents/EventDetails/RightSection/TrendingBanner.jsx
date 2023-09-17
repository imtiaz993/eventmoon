// icons
import Fire from '../../../svgs/Fire';

const TrendingBanner = ({ data, cx }) => {
  return (
    <div className={cx('trending-banner')}>
      {data?.IsTrending === '1' && (
        <>
          <div className={cx('left-section')}>
            <Fire className={cx('icon')} />
            <span>Trending </span>
          </div>
          <div className={cx('right-section')}>
            {data?.IsInterested} People are interested
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingBanner;
