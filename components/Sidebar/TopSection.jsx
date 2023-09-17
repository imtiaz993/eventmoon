import styles from './styles.module.scss';

// assets
import EditIcon from '../../svgs/EditIcon';

// components
import Link from 'next/link';
import Image from 'next/image';

const TopSection = () => {
  return (
    <>
      <div className={styles.top_outer}>
        <div className={styles.profile_picture_wrapper}>
          <div className={styles.profile_picture}>
            <Image
              src='/assets/images/placeholder-128.png'
              layout='fill'
              alt='avatar'
            />
          </div>
          <span className={styles.level}>Lvl:1</span>
        </div>
        <div className={styles.profile_details}>
          <span className={styles.name}>Ahtesham</span>
          <Link href='#'>
            <a className={styles.edit_profile}>
              Edit Profile <EditIcon />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopSection;
