import { useState } from 'react';
import classNames from 'classnames/bind';

// components
import { LightBox } from 'components';
import Image from 'next/image';

// styles
import styles from './ImageBox.module.scss';

const cx = classNames.bind(styles);

const ImageBox = ({ images, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className={cx('img-box-wrapper')}>
      <div className={cx('img-wrapper')} onClick={() => setIsOpen(true)}>
        <Image
          src={
            !imgError
              ? `/api/imageproxy?url=${encodeURIComponent(images[0])}`
              : '/assets/images/placeholder-city.png'
          }
          layout='fill'
          alt={alt}
          onError={() => setImgError(true)}
        />
        <div className={cx('overlay')}>
          <span>{images?.length}+</span>
          <span>photos</span>
        </div>
      </div>
      <LightBox images={images} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ImageBox;
