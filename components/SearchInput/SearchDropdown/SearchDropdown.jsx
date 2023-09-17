import React, {useContext} from 'react';
import classNames from "classnames/bind";
import { motion, AnimatePresence } from "framer-motion";
import { UserAuthContext } from "context/UserAuthContext";
// utils
import { convertToSlug } from "utils/helper";

// hooks
import { useState, useEffect } from "react";
import { useSearchEvents } from "hooks";

// components
import { LoadingRing } from "components";
import Link from "next/link";
import Image from "next/image";

// styles
import styles from "./SearchDropdown.module.scss";

const cx = classNames.bind(styles);

const container = {
  hidden: {
    maxHeight: 0,
  },
  shown: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
    maxHeight: "50vh",
  },
};

const item = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  shown: {
    scale: 1,
    opacity: 1,
  },
};

const handleOverflow = (str, max) => {
  if (!str) return "";
  return str.slice(0, max) + (str?.length > max ? "..." : "");
};

const SearchResult = ({ data }) => {
  const { userLocation } = useContext(UserAuthContext);
  const getSlug = () => {
    if (data) {
      return `/${userLocation?.name.replace(/ /g, "-")}/${data.CategoryName.replace(/ /g, "-")}/${convertToSlug(data.EventName).replace(/ /g, "-")}/${
        data.EventId
      }-${data.TimeId}`;
    } else return "#";
  };

  return (
    <motion.li variants={item} className={cx("search-result-wrapper")}>
      <Link href={getSlug()}>
        <a className={cx("search-result")}>
          <div className={cx("image-wrapper")}>
            <Image
              src={
                (data?.Image &&
                  `/api/imageproxy?url=${encodeURIComponent(data?.Image)}`) ||
                "/assets/images/placeholder-city.png"
              }
              alt={data.EventName}
              width={160}
              height={90}
              objectFit="cover"
            />
          </div>
          <div className={cx("info")}>
            <div className={cx("name")}>
              {handleOverflow(data.EventName, 34)}
            </div>
            <div className={cx("location")}>
              {handleOverflow(data.Location, 50)}
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

const SearchDropdown = ({
  userLocation,
  searchTerm,
  inFocus,
  showDropdown = true,
  data,
  isLoading,
}) => {
  // const { data, isLoading } = useSearchEvents(
  //   searchTerm,
  //   userLocation,
  //   !!(userLocation && searchTerm)
  // );

  const [results, setResults] = useState(null);

  useEffect(() => {
    if (data) setResults(data);
  }, [data]);

  return (
    inFocus &&
    searchTerm &&
    showDropdown && (
      <div className={cx("search-dropdown-root")}>
        <AnimatePresence>
          {results && results?.length && (
            <motion.ul
              className={cx("search-dropdown")}
              variants={container}
              initial="hidden"
              animate="shown"
              exit="hidden"
            >
              {results &&
                results.map((result, i) => (
                  <SearchResult data={result} key={i.toString()} />
                ))}
            </motion.ul>
          )}
        </AnimatePresence>
        {!results?.length && (
          <div className={cx("loading-info")}>
            {isLoading ? <LoadingRing /> : "Not found"}
          </div>
        )}
      </div>
    )
  );
};

export default SearchDropdown;
