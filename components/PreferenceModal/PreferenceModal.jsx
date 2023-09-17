import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./PreferenceModal.module.scss";

const PreferenceModal = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.wrapper}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.content}
          >
            <p>Location service is disable.</p>
            <p>Enable location service for your Browser and try again</p>
            <div className={styles.btn__grp}>
              <button onClick={handleClose}>Cancel</button>
              <a
                href="x-apple.systempreferences:com.apple.preference.security"
                onClick={handleClose}
              >
                Open System Preference
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreferenceModal;
