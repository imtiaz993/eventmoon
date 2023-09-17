import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';

// components
import {
  FollowingList,
  NotificationList,
  SearchInput,
  SearchView,
  Tabs,
} from '../components';

//assets
import X from '../../../svgs/X';
import ChevronRight from '../../../svgs/ChevronRight';
import Search from '../../../svgs/Search';

// data
import { followers, notifications } from '../data';

// variants
import {
  search_view_wrapper_variants,
  tab_content_variants,
  tab_variants,
} from '../data/variants';

import styles from './Content.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

const Content = ({ handleClose }) => {
  const [showInput, setShowInput] = useState(false);
  const [tabIndex, setTabIndex] = useState(2);

  const handleBtnClose = () => {
    if (!showInput) handleClose();
    else setShowInput(false);
  };

  return (
    <div className={cx('notification-root', { open: showInput })}>
      <span
        className={cx('btn-close', { select: showInput })}
        onClick={handleBtnClose}
      >
        {!showInput ? <X /> : <ChevronRight />}
      </span>
      <div className={cx('search-section')}>
        <SearchInput
          PreffixIcon={<Search />}
          isOpen={showInput}
          setIsOpen={setShowInput}
        />
      </div>
      <motion.div
        variants={tab_content_variants}
        animate={showInput ? 'shrink' : 'full'}
        transition={{ duration: 0.15 }}
        className={cx('content-section', { fixed: showInput })}
      >
        <Tabs index={tabIndex} setIndex={setTabIndex} />
        <div className={cx('content')}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={tabIndex}
              variants={tab_variants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.15 }}
            >
              {tabIndex === 2 ? (
                <NotificationList data={notifications} />
              ) : (
                <FollowingList list={followers} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {showInput && (
          <motion.div
            variants={search_view_wrapper_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={cx('search-view-wrapper')}
          >
            <SearchView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Content;
