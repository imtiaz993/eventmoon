import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// styles
import styles from './styles.module.scss';

// assets
import {
  HomeIcon,
  LogoutIcon,
  PromoteRounded,
  PlusRounded,
  Notification,
  CrowdIcon,
} from '../../svgs';

// context
import { UserAuthContext } from '../../context/UserAuthContext';
import { useContext } from 'react';

// components
import TopSection from './TopSection';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { user, logout } = useContext(UserAuthContext);

  return (
    <AnimatePresence>
      {showSidebar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.sidebar}`}
          onClick={() => setShowSidebar(false)}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              exit={{ x: -500 }}
              transition={{ type: 'tween' }}
              className={styles.bar}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.top}>
                <TopSection />
              </div>
              <div className={styles.menu}>
                <ul>
                  <li>
                    <Link href='/'>
                      <a>
                        <HomeIcon />
                        <p>Home</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                  <Link href='/blogs'>
                  <a>
                    <Notification />
                    <p>Blogs</p>
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href='/profile'>
                      <a>
                      <CrowdIcon />
                    <p>Profile</p>
                      </a>
                    </Link>
                   
                  </li>
                  <li>
                    <Link href='/create-event'>
                      <a>
                        <PlusRounded />
                        <p>Add Event</p>
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <PromoteRounded />
                    <p>Promote My Event</p>
                  </li> */}
                  <li>
                    <LogoutIcon />
                    {user ? (
                      <p onClick={logout}>Logout</p>
                    ) : (
                      <Link href='/register'>
                        <a>Register</a>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
