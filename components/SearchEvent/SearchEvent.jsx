import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchInput } from "components";
import classNames from "classnames/bind";
import styles from "./searchEvent.module.scss";

const cx = classNames.bind(styles);
const SearchEvent = ({ searchParams, setSearchParams }) => {
  const router = useRouter();
  const [inFocus, setInFocus] = useState(false);
  return (
    <div className={cx("event-wrapper")}>
      <div className={cx("moon-image")}>
        <Image src="/assets/images/search-event-moon.png" width="111.28px" height="116.4px" alt="moon"/>
      
      </div>
      <div className={cx("event-content")}>
        <h1 className={cx("heading")}>Find More</h1>
        <h1 className={cx("sub-heading")}>Events</h1>
        <p className={cx("text")}>
          An event community thats powered by you Post events Help others find
          local fun
        </p>
      </div>
      <div className={cx("search-wrapper")}>
        <div className={cx("search-input")}>
          <SearchInput
            wrapperClass={cx("search-input-wrapper", "default")}
            inputClass={cx("search-input")}
            inFocus={inFocus}
            setInFocus={setInFocus}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </div>

        <button
          className={cx("search-button")}
          onClick={() => {
      
            if (searchParams.term) {
              router.push({
                pathname: "/search",
                query: {
                  term: searchParams.term,
                  departure: searchParams.departure,
                  end: searchParams.end,
                  location: searchParams.location,
                },
              });
            }
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchEvent;
