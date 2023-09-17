import { motion } from "framer-motion";
import classNames from "classnames/bind";

// component
import Item from "./Item";

import styles from "./ComingSoon.module.scss";

const cx = classNames.bind(styles);

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cx("coming-wrapper")}
    >
      <Item />
    </motion.div>
  )
}

export default ComingSoon;
