import React from "react";
import classNames from "classnames/bind";

import styles from "./SearchInput.module.scss";
const cx = classNames.bind(styles);

const SearchInput = ({ PreffixIcon, SuffixIcon, isOpen, setIsOpen }) => {
  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={cx("search-input-root", { select: isOpen })}
      onClick={handleClick}
    >
      {PreffixIcon && <PreffixIcon />}
      <input type="text" placeholder="Search venues" />
      {SuffixIcon && <SuffixIcon />}
    </div>
  );
};

export default SearchInput;
