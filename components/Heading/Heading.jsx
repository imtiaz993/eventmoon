// libraries
import classNames from 'classnames/bind';

// components
import Link from 'next/link';

// styles
import styles from './Heading.module.scss';
const cx = classNames.bind(styles);

const Heading = ({ title, to, link, handleClick, wrapperClass }) => {
  return (
    <h1 className={cx('heading-root', wrapperClass)}>
      {title} {to && <span onClick={handleClick}>See all</span>}
      {link && (
        <Link href={link}>
          <a onClick={handleClick}>See all</a>
        </Link>
      )}
    </h1>
  );
};

export default Heading;
