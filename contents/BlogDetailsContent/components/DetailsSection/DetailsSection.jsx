import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames/bind';

// styles
import styles from './DetailsSection.module.scss';

// components
import Tags from '../Tags/Tags';
import AdSection from './AdSection';
import { Button } from 'components';

// assets
import ArrowRight from '../../../../svgs/ArrowRight';

const cx = classNames.bind(styles);

const DetailsSection = ({ blogData }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (blogData) setData(blogData);
  }, [blogData]);

  return (
    <div className={cx('section-wrapper')}>
      <div className={cx('left')}>
        <h1 className={cx('title')}>{data?.BlogTitle || <Skeleton />}</h1>
        <Tags />
        {data?.BlogDescription ? (
          <p
            className={cx('desc')}
            dangerouslySetInnerHTML={{ __html: data?.BlogDescription }}
          />
        ) : (
          <Skeleton count={5} className={cx('desc')} />
        )}
        <Button
          label={cx('Discover now')}
          labelClass={cx('label')}
          wrapperClass={cx('discover-btn')}
          Suffix={<ArrowRight />}
          suffixClass={cx('suffix-icon')}
        />
      </div>
      <div className={cx('right')}>
        <AdSection />
      </div>
    </div>
  );
};

export default DetailsSection;
