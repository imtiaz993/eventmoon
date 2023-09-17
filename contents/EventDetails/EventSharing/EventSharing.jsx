// libraries
import React from 'react';
import classNames from 'classnames/bind';

//assets
import { Share } from 'svgs';
import FacebookLogo from 'svgs/FacebookLogo';
import LinkedInLogo from 'svgs/LinkedInLogo';
import TwitterLogo from 'svgs/TwitterLogo';
import EmailLogo from 'svgs/EmailLogo';
import WhatsappLogo from 'svgs/WhatsappLogo';
import SendtoMobile from 'svgs/SendtoMobile';

// styles
import styles from './EventSharing.module.scss';

const cx = classNames.bind(styles);

const EventSharing = () => {
  return (
    <div className={cx('event-sharing')}>
      <h1>Eventmoon/Diwalifestival</h1>
      <div className={cx('share-head')}>
        <Share color='#1758FE' />
        <p>Share with Friends</p>
      </div>
      <div className={cx('social-icons')}>
        <FacebookLogo />
        <LinkedInLogo />
        <TwitterLogo />
        <EmailLogo />
        <WhatsappLogo />
        <SendtoMobile />
      </div>
      <button>Copy Link</button>
    </div>
  );
};

export default EventSharing;
