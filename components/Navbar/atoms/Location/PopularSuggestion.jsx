import React from "react";
import classNames from "classnames/bind";
import styles from "./UserLocation.module.scss";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLocationSearching } from "react-icons/md";

import { popular_location } from "./data";

const cx = classNames.bind(styles);

const PopularSuggestion = ({ handleCurrentLocation, handleSelect }) => {
  return (
    <React.Fragment>
      <li
        className={cx("location-item", "current")}
        onClick={handleCurrentLocation}
      >
        <BiCurrentLocation size={20} color="#1758fe" />
        <div className={cx("content")}>
          <span className={cx("main-text")}>Current Location</span>
        </div>
      </li>
      {popular_location.map((loc, i) => (
        <li
          key={i}
          className={cx("location-item")}
          onClick={() => handleSelect(loc)}
        >
          <MdOutlineLocationSearching size={18} color="#1758fe" />
          <div className={cx("content")}>
            <span className={cx("main-text")}>{loc.main}</span>
            <span className={cx("secondary-text")}>{loc.secondary}</span>
          </div>
        </li>
      ))}
    </React.Fragment>
  );
};

export default PopularSuggestion;
