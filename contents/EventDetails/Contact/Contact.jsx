// libraries
import classNames from 'classnames/bind';

// styles
import styles from './Contact.module.scss';

// assets
// import contact from "../../../assets/images/details/contact.svg";
import Telephone from '../../../svgs/Telephone';

const cx = classNames.bind(styles);

const Contact = ({ data }) => {
  return (
    <div className={cx('contact')}>
      <div className={cx('wrap')}>
        <div className={cx('info-wrap')}>
          <Telephone />
          <div>
            <h6>Contact Host</h6>
            <p>+{data?.PhoneNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
