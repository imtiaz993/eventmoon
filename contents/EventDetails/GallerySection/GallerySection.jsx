import classNames from 'classnames/bind';
import { useState } from 'react';

// components
import Link from 'next/link';
import Image from 'next/image';

// styles
import styles from './GallerySection.module.scss';
import { LightBox } from 'components';

const cx = classNames.bind(styles);

const images = Array(12).fill('/assets/images/placeholder-blog.png');

const GallerySection = ({ maxLength = 4, data }) => {
  let _images = [...(data?.ImageUrls || data?.photos || images)];

  let _limitedImages = [..._images];
  let overflow = 0;

  if (images.length > maxLength) {
    overflow = images.length - maxLength;
    _limitedImages.length = maxLength;
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);

 

  return (
    <div className={cx('gallery-section')}>
      <div className={cx('heading')}>
        <h4>Event Pictures</h4>
        <Link href='#'>
          <a className={cx('see-all')} href='#'>
            See all
          </a>
        </Link>
      </div>
      <div className={cx('images')}>
        {_limitedImages.map((image, i) => (
          <div
            className={cx('image-wrapper')}
            onClick={() => setLightboxOpen(true)}
            key={i.toString()}
          >
            <Image
              src={
                image.src || `/api/imageproxy?url=${encodeURIComponent(image)}`
              }
              // src={image.src}
              alt={data?.EventName}
              layout='fill'
              objectFit='cover'
              unoptimized
            />
            {i === maxLength - 1 && overflow > 0 && (
              <div
                className={cx('overflow')}
                onClick={() => setLightboxOpen(true)}
              >
                <h2>{overflow} +</h2>
                <p>
                  More photos <br /> from this event
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <LightBox
        images={_images}
        isOpen={lightboxOpen}
        setIsOpen={setLightboxOpen}
      />
    </div>
  );
};

export default GallerySection;
