import classNames from 'classnames/bind';

// assets
import { Moon, ArrowLeft } from '../../../svgs';

// components
import Link from 'next/link';
import Image from 'next/image';

import styles from './ProfileHeader.module.scss';
const cx = classNames.bind(styles);

const ProfileHeader = () => {
  return (
    <>
      <div className={cx('bg-gradient')}>
        <div></div>
      </div>
      <div className={cx('header-wrapper')}>
        <span className={cx('contact-mob')}>Contact</span>
        <Link href='/'>
          <a>
            <ArrowLeft className={cx('back-arrow')} />
          </a>
        </Link>
        <div className={cx('avatar')}>
          <div className={cx('img-wrapper')}>
            <Image src='/assets/images/avatar-1.png' alt='profile' width={"100%"} height={"100%"}/>
          </div>
          <h3>Ahtesham</h3>
          <span className={cx('tag-mob')}>Trusted Promoter</span>
          <p className={cx('bio-mob')}>
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
          </p>
          <button>Follow</button>
        </div>
        <div className={cx('info')}>
          <div>
            <span className={cx('numb')}>201</span>
            <span className={cx('label')}>Total Events</span>
          </div>
          <span className={cx('divider')}></span>
          <div>
            <span className={cx('numb')}>2</span>
            <span className={cx('label')}>Upcoming Events</span>
          </div>
          <span className={cx('divider')}></span>
          <div>
            <span className={cx('numb', 'icon-wrapper')}>
              <Moon /> 120
            </span>
            <span className={cx('label')}>Followers</span>
          </div>
          <span className={cx('tag')}>Trusted Promoter</span>
        </div>
      </div>
      <p className={cx('bio')}>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has?
      </p>
    </>
  );
};

export default ProfileHeader;
