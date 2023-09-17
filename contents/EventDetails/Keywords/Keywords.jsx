// libraries
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';

// styles
import styles from './Keywords.module.scss';

// assets
import {
  Share,
  Facebook,
  Linkedin,
  Twitter,
  Email,
  Whatsapp,
  Phone,
} from '../../../svgs';

// utils
import { convertToSlug } from 'utils/helper';

const cx = classNames.bind(styles);

const Keywords = ({ data }) => {
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (data) {
      let origin = window.location.origin;
      let slug = convertToSlug(data?.EventName);

      let link = `${origin}/${slug}/${data?.EventId}/${data?.TimeId}`;
      setUrl(link);

      setTags(getTags(data.Tags));
    }
  }, [data]);

  const trimText = (_str, _length) => {
    if (!_str) return '';
    return _str.substring(0, _length);
  };

  const getTags = (_str) => {
    if (_str && _str !== '') {
      let arr = _str.split(',');
      return arr;
    }

    return [];
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);

    toast.success('url copied', {
      className: 'bg-blue',
      position: 'bottom-center',
    });
  };

  return (
    <div className={cx('keywords')}>
      <div className={cx('wrap')}>
        <h6>Keywords</h6>
        {tags?.length > 0 && (
          <div className={cx('tags')}>
            {tags.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
        <div className={cx('copy-link')}>
          <span>eventmoon/{trimText(convertToSlug(data?.EventName), 10)}</span>
          <span onClick={handleCopy} className={cx('copy-btn')}>
            Copy Link
          </span>
        </div>
        <div className={cx('share')}>
          <h5>
            <Share className={cx('icon')} />
            Share with Friends
          </h5>
          <span className={cx('icon-wrapper')}>
            <Facebook className={cx('icon')} />
            <Linkedin className={cx('icon')} />
            <Twitter className={cx('icon')} />
            <Email className={cx('icon')} />
            <Whatsapp className={cx('icon')} />
            <Phone className={cx('icon')} />
          </span>
          <span onClick={handleCopy} className={cx('copy-btn')}>
            Copy Link
          </span>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
