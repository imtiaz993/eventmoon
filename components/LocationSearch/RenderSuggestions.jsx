import React from "react";
import classNames from "classnames/bind";

import styles from "./LocationSearch.module.scss";
const cx = classNames.bind(styles);

const RenderSuggestions = ({ data, handleSelect }) => {
  return data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;

    return (
      <li
        key={place_id}
        className={cx("location-item")}
        onClick={handleSelect(suggestion)}
      >
        <div className={cx("content")}>
          <span className={cx("main-text")}>{main_text}</span>
          <span className={cx("secondary-text")}>{secondary_text}</span>
        </div>
      </li>
    );
  });
};

export default RenderSuggestions;
