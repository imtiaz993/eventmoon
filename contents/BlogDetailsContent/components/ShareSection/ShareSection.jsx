import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';

// styles
import styles from './ShareSection.module.scss';

// assets
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Email,
  Share,
  Telephone,
} from '../../../../svgs';

// utils
import { convertToSlug } from 'utils/helper';

const cx = classNames.bind(styles);

const ShareSection = ({ blogData }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (blogData) {
      let origin = window.location.origin;
      let slug = blogData?.BlogLink;

      let link = `${origin}/blogs/${slug}`;
      setUrl(link);
    }
  }, [blogData]);

  const trimText = (_str, _length) => {
    if (!_str) return '';
    return _str.substring(0, _length);
  };

  return (
    <div className={cx('share-wrapper')}>
      <h5>
        Share with Friends
        <Share className={cx('share-icon')} />
      </h5>
      <div className={cx('row')}>
        <div className={cx('copy-link')}>
          <span>eventmoon/{trimText(blogData?.BlogLink, 10)}</span>
          <span
            onClick={() => {
              navigator.clipboard.writeText(url);
              toast.success('url copied', {
                className: 'bg-blue',
                position: 'bottom-center',
              });
            }}
          >
            Copy Link
          </span>
        </div>
        <span>
          <Facebook />
          <Linkedin />
          <Twitter />
          <Instagram />
          <Email />
          <Telephone className={cx('phone-icon')} />
        </span>
      </div>
    </div>
  );
};

export default ShareSection;
