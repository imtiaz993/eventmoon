import React from "react";
import classNames from "classnames/bind";
import { motion, AnimatePresence } from "framer-motion";

// content
import Content from "./content";

// variants
import { mob_variants, desktop_variants } from "./data/variants";

import styles from "./Notification.module.scss";
const cx = classNames.bind(styles);

const Notification = ({ isMobView, isOpen, setIsOpen, desktopWrapper }) => {
  const handleClose = () => {
    document.body.classList.remove("set-y");
    setIsOpen(false);
  };

  return isMobView ? (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mob_variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cx("notification-mob-wrapper")}
        >
          <Content handleClose={handleClose} />
        </motion.div>
      )}
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={desktop_variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.35 }}
          className={cx("notification-desktop-wrapper", desktopWrapper)}
        >
          <Content handleClose={handleClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
