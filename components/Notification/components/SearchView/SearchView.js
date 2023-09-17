import React from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

// variants
import { search_view_variants } from "../../data/variants";

import styles from "./SearchView.module.scss";
const cx = classNames.bind(styles);

const SearchView = () => {
  return (
    <motion.div variants={search_view_variants}>
      <div className={cx("search-view-root")}>search view content</div>
    </motion.div>
  );
};

export default SearchView;
