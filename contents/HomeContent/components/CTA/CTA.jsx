// libraries
import classNames from 'classnames/bind';

// components
import Link from 'next/link';
import Image from 'next/image';
import { Section } from 'components';

// images
import { PlayStore, AppStore } from '../../../../svgs';

// styles
import styles from './CTA.module.scss';

const cx = classNames.bind(styles);

const CTA = () => {
  return (
    <div className={cx('home-cta-root')}>
      <div className={cx('bg-color')}>
        <div className={cx('banner')}>
          <div className={cx('txt-large')}>Discover what’s near you</div>
        
          <div className={cx('mobile-rating')}>(5) rating</div>
          <div className={cx('mboile-stars-img')}>
            <Image
              src='/assets/images/5stars.png'
              alt=''
              width={170.67}
              height={32}
            />
          </div>
          <div className={cx('heading-wrap')}>
            <div className={cx('txt-lg')}>From</div>
            <div className={cx('txt-subheading')}> the hottest party’s</div>
          </div>
          <div className={cx('txt-lastsubheading')}>
            To events the whole family will love{' '}
          </div>
          <div className={cx('img-sub')}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src='/assets/images/arr.png'
              alt='...'
              width={100}
              height={100}
            />
          </div>
          <div>
          <div className={cx('img-arrsub')}>
            <Image
              src='/assets/images/arrdown.png'
              alt='...'
              width={18}
              height={10}
            />
          </div>
          </div>
          <div className={cx('arrdown-para')}>Now available on</div>

          <div className={cx('get-the-app')}>
            <Link
              href='https:play.google.com/store/apps/details?id=com.music_event_app&hl=en_US&gl=US'
              target='_blank'
              rel='noreferrer'
            >
              <a className={cx('btn-playstore-mr')}>
                <PlayStore />
              </a>
            </Link>
            <Link
              href='https:apps.apple.com/us/app/event-moon/id1317300725'
              target='_blank'
              rel='noreferrer'
            >
              <a className={cx('btn-appsotre-ml')}>
                <AppStore />
              </a>
            </Link>
          </div>
        </div>
        <div className={cx('right-img')}>
          <Image
            src='/assets/images/CTA-mobile.png'
            alt=''
            width={570.09}
            height={505}
          />
        </div>
      </div>
    </div>

  );
};

export default CTA;
