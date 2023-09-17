import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

// components
import { Navbar } from 'components';
import Image from 'next/image';

// styles
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ data }) => {
  const [bgImage, setBgImage] = useState(data?.BlogImage);

  useEffect(() => {
    if (data?.BlogImage) setBgImage(data.BlogImage);
  }, [data]);

  if (!data) return <Navbar />;

  return (
    <div className={cx('hero-wrapper')}>
      <div className={cx('fixed-bg-wrapper')}>
        <Image
          src={bgImage}
          alt={data?.BlogTitle}
          objectFit='cover'
          layout='fill'
          onError={() => setBgImage('/assets/images/placeholder-blog.png')}
          unoptimized
        />
      </div>
      <Navbar />
      <div className={cx('hero-text')}>
        <h3>Welcome to</h3>
        <h2>Blog</h2>
      </div>
    </div>
  );
};

export default Hero;
