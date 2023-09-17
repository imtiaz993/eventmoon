import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

// components
import { SearchInput } from '..';
import { LocationSearch } from 'components';
import EventItem from '../SearchDropDown/EventItem';

//assets
import X from '../../../../svgs/X';

// contex
import { UserAuthContext } from 'context/UserAuthContext';

// import { FaHistory } from "react-icons/fa";

// varaints
import { fragment_variants } from '../../data/variants';

// import { search_results } from "../../data";

import styles from './Fragment.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

const Fragment = ({ isOpen, setShowPref, toggle }) => {
  const { userLocation, updateUserLocation } = useContext(UserAuthContext);

  const [searchEvents, setSearchEvents] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleDone = (_data) => {
    setShowResult(true);
    setSearchEvents(_data);
  };

  const handleClose = () => {
    setSearchEvents(null);
    setShowResult(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={fragment_variants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={cx('fragment-root')}
        >
          <div className={cx('content')}>
            <span className={cx('close-btn')} onClick={toggle}>
              <X />
            </span>
            {/* <SearchInput
              wrapperClass={cx('search-wrapper')}
              userLocation={userLocation}
              handleDone={handleDone}
              handleClose={handleClose}
              isClose={showResult}
            /> */}
            <LocationSearch
              wrapperClass={cx('location-wrapper')}
              userLocation={userLocation}
              updateUserLocation={updateUserLocation}
              setShowPref={setShowPref}
              toggle={toggle}
            />
            {/* <div className={cx('list-content')}>
              {showResult ? (
                <div>
                  {searchEvents && searchEvents?.length > 0 ? (
                    searchEvents.map((item, i) => (
                      <EventItem key={i} data={item} />
                    ))
                  ) : (
                    <p className={cx('no-found')}>Nothing Found</p>
                  )}
                </div>
              ) : (
                <div className={cx('recent-content')}>
                  <h2 className={cx('heading')}>Recent Searches</h2>
                  <ul className={cx('recent-list')}>
                    <li onClick={() => alert("coming soon")}>
                      <FaHistory /> <span>las vegas</span>
                    </li>
                    <li onClick={() => alert("coming soon")}>
                      <FaHistory /> <span>writing in plain english</span>
                    </li>
                    <li onClick={() => alert("coming soon")}>
                      <FaHistory /> <span>website</span>
                    </li>
                    <li onClick={() => alert("coming soon")}>
                      <FaHistory /> <span>support</span>
                    </li>
                  </ul>
                </div>
              )}
            </div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Fragment;
