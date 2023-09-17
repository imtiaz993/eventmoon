import classNames from 'classnames/bind';

// styles
import styles from './styles.module.scss';

// components
import OTPForm from './OTPForm';
import Image from 'next/image';

const cx = classNames.bind(styles);

const OTPContent = () => {
  return (
    <div className={cx('otp-root')}>
      <div className={cx('logo', 'desktop')}>
        <Image src='/assets/images/logo_dark.svg' alt='eventmoon' />
      </div>
      <OTPForm />
    </div>
  );
};

export default OTPContent;
