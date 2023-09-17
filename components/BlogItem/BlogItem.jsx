import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

// components
import Link from 'next/link';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { Button } from 'components';

//assets
import ArrowRight from '../../svgs/ArrowRight';

// styles
import styles from './BlogItem.module.scss';

const cx = classNames.bind(styles);

const BlogItem = ({ data }) => {
  const [description, setDescription] = useState(data?.BlogDescription);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (data) {
      if (data?.BlogDescription?.length > 200) {
        let plainText = data.BlogDescription.replace(/<[^>]+>/g, '').replace(
          /&nbsp;/g,
          ' '
        );

        plainText = plainText?.substring(0, 180) + '...';

        setDescription(plainText);
      }
    }
  }, [data]);

  if (!data.BlogImage) return <SkeletonComponent />;

  return (
    <Link href={`/blogs/${data?.BlogLink}`}>
      <a className={cx('blog-root')}>
        <div className={cx('blog-item')}>
          <div className={cx('image-wrapper')}>
            <Image
              src={
                !imageError
                  ? data.BlogImage
                  : '/assets/images/placeholder-gradient.png'
              }
              alt={data.BlogTitle}
              objectFit='cover'
              layout='fill'
              className={cx('image')}
              onError={() => setImageError(true)}
              priority={true}
              unoptimized
            />
          </div>
          <div>
            <h2>
              {data?.BlogTitle.substring(0, 50) +
                (data?.BlogTitle?.length > 50 ? '...' : '')}
            </h2>
            <p className={cx('overview', 'blog-overview')}>{description}</p>
            <Button
              wrapperClass={cx('discover-btn')}
              label='Discover now'
              labelClass={cx('label')}
              Suffix={<ArrowRight />}
              suffixClass={cx('suffix-icon')}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

const SkeletonComponent = () => {
  return (
    <div className={cx('blog-item')}>
      <Skeleton className={cx('placeholder')} />
      <div>
        <h2>
          <Skeleton />
        </h2>
        <Skeleton count={2} className={cx('overview-placeholder')} />
        <Skeleton className={cx('btn-placeholder')} />
      </div>
    </div>
  );
};

export default BlogItem;
