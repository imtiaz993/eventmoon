import classNames from "classnames/bind";
import { motion } from "framer-motion";

// data
import { children_variants } from "./data";

// components
import Link from "next/link";
import Image from "next/image";
import SearchSuggestion from "./SearchSuggestion";
import Skeleton from "react-loading-skeleton";

// styles
import styles from "./SearchSuggestions.module.scss";

const cx = classNames.bind(styles);

export default function EventDestinations({ data, isLoading, setSearchTerm }) {
  return (
    <motion.li
      variants={children_variants}
      className={cx("event-destinations")}
    >
      <div className={cx("group-heading")}>Popular Event destinations</div>
      {!isLoading ? (
        data?.EventDestinations.map((destination, i) => (
          <SearchSuggestion
            setSearchTerm={setSearchTerm}
            value={destination.Name}
            key={i.toString()}
            wrapperClass={cx("destination")}
          >
            <Image
              src={destination.Image}
              width={80}
              height={45}
              alt={destination.Name}
            />
            <div className={cx("info")}>
              <span className={cx("city")}>{destination.Name}</span>
              <span className={cx("state")}>{destination.Location}</span>
            </div>
            <Link href={"#"}>
              <a className={cx("explore-link")}>Explore</a>
            </Link>
          </SearchSuggestion>
        ))
      ) : (
        <SkeletonComponent count={4} />
      )}
    </motion.li>
  );
}

const SkeletonComponent = ({ count }) => {
  return Array.from(Array(count)).map((_, i) => (
    <div className={cx("destination", "skeleton")} key={i.toString()}>
      <Skeleton className={cx("image")} />
      <div className={cx("info")}>
        <Skeleton className={cx("city")} />
        <Skeleton className={cx("state")} />
      </div>
    </div>
  ));
};
