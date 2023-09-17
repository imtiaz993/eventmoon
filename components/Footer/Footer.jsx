// libraries
import React from 'react';
import classNames from 'classnames/bind';

//assets
import Location from '../../svgs/Location';
import Email from '../../svgs/Email';
import Facebook from '../../svgs/Facebook';
import Instagram from '../../svgs/Instagram';
import Linkedin from '../../svgs/Linkedin';
import Twitter from '../../svgs/Twitter';
import Google from '../../svgs/Google';
import PlayStore from '../../svgs/PlayStore';
import AppStore from '../../svgs/AppStore';

// components
import { FadeTop } from 'components';
import { Logo } from 'components';
import Link from 'next/link';

// styles
import styles from './Footer.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <div className={cx('wrap')}>
        <div className={cx('head')}>
          <Logo />
          <span>
            Global platform for live exeprinces that allow anyone to
            create,share and attend events.
          </span>
        </div>
        <div className={cx('body')}>
          <div className={cx('content')}>
            <div className={cx('links')}>
              <div>
                <h6>Quick Links</h6>
                <Link href='/about'>
                  <a>About Us</a>
                </Link>
                <Link href='/'>
                  <a>Careers</a>
                </Link>
                <Link href='/'>
                  <a>Help</a>
                </Link>
                <Link href='/privacy-policy'>
                  <a>Terms,Privacy & Cookies</a>
                </Link>
              </div>
              <div>
                <h6>Event Blog</h6>
                <Link href='/'>
                  <a>Event By Venue</a>
                </Link>
                <Link href='/'>
                  <a>Gift Cards</a>
                </Link>
                <Link href='/'>
                  <a>Last Minute Services</a>
                </Link>
                <Link href='/'>
                  <a>Notifications</a>
                </Link>
              </div>
            </div>
            <div className={cx('contact')}>
              <h6>Contact Us</h6>
              <div>
                <Location />
                <span>Eventmoon 260 Wolcott ST New Haven CT 06510</span>
              </div>
              <div>
                <Email />
                <span>
                  <Link href='mailto:contact@eventmoon.com'>
                    <a target='_blank' rel='noopener noreferrer'>
                      contact@eventmoon.com
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className={cx('social_links')}>
            <h6>Follow us </h6>
            <div className={cx('wrapper')}>
              <span>
                <FadeTop duration={0.5} y={20}>
                  <Facebook />
                </FadeTop>
              </span>
              <span>
                <FadeTop duration={0.5} y={20}>
                  <Link href='https://www.instagram.com/eventfindingapp/?hl=en'>
                    <a target='_blank' rel='noopener noreferrer'>
                      <Instagram />
                    </a>
                  </Link>
                </FadeTop>
              </span>
              <span>
                <FadeTop duration={0.5} y={20}>
                  <Linkedin />
                </FadeTop>
              </span>
              <span>
                <FadeTop duration={0.5} y={20}>
                  <Link href='https://twitter.com/eventmoonapp'>
                    <a target='_blank' rel='noopener noreferrer'>
                      <Twitter />
                    </a>
                  </Link>
                </FadeTop>
              </span>
              <span>
                <FadeTop duration={0.5} y={20}>
                  <Google />
                </FadeTop>
              </span>
            </div>
          </div>
          <div className={cx('rights')}>
            <p>
              © 2020 Eventmoon. All Rights Reserved. Use Of This Website
              Signifies Your Agreement To Our User Agreement, Privacy Notice And
              Cookie Notice. You Are Buying Tickets From A Third Party; Stubhub
              Is Not The Ticket Seller. Prices Are Set By Sellers And May Be
              Above Face Value. User Aggrement Change Notifications.
            </p>
            <span>
              <Link href='https://play.google.com/store/apps/details?id=com.music_event_app&hl=en_US&gl=US'>
                <a target='_blank' rel='noopener noreferrer'>
                  <PlayStore />
                </a>
              </Link>
              <Link href='https://apps.apple.com/us/app/event-moon/id1317300725'>
                <a target='_blank' rel='noopener noreferrer'>
                  <AppStore />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
