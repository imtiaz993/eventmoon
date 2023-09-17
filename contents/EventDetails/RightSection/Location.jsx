//icons
import { Location as LocationIcon } from '../../../svgs';

//components
import Skeleton from 'react-loading-skeleton';

const Location = ({ data, cx }) => {
  return data?.Location !== undefined ? (
    <div className={cx('location')}>
      <LocationIcon className={cx('icon')} />
      <span>{data?.Location}</span>
    </div>
  ) : (
    <Skeleton />
  );
};

export default Location;
