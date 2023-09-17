import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import moment from "moment/moment";
// hooks
import { useState, useContext } from "react";
import { useNoScroll, useSearchEvents } from "hooks";

// context
import { UserAuthContext } from "context/UserAuthContext";

// styles
import styles from "./SearchContent.module.scss";

// assets
import { Filter, SortDown } from "../../svgs";

// components
import {
  Button,
  Navbar,
  LocationSearch,
  SearchInput,
  LoadingRing,
} from "components";
import { EventItem, Filters } from "./components";

const cx = classNames.bind(styles);

const SearchContent = () => {
  const router = useRouter();
  const { term, departure, end, location } = router.query;
  const [isVirtual, setIsVirtual] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [distance, setDistance] = useState(null);
  const [category,setCategory]=useState(null)

  const [filtersShown, setFiltersShown] = useState(false);
  const [, setShowPrefModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { userLocation, updateUserLocation } = useContext(UserAuthContext);

  const [searchLocation, setSearchLocation] = useState({ ...userLocation });
  useEffect(() => {
    setSearchLocation(userLocation);
  }, [userLocation, isVirtual, startDate, endDate,distance,category]);

  const {
    data: results,
    isLoading,
    error,
  } = useSearchEvents(term, searchLocation,startDate, endDate, isVirtual,distance,category);

  useNoScroll(filtersShown);

  const [searchParams, setSearchParams] = useState({
    term: "",
    departure: "",
    end: "",
    location: "New York",
  });

  return (
    <div className={cx("search-root")}>
      <Navbar isMobHide SearchPage/>
      <div className={cx("control")}>
        <SearchInput
          value={searchTerm}
          setValue={setSearchTerm}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        {/* <LocationSearch
          wrapperClass={cx("search-location")}
          userLocation={userLocation}
          updateUserLocation={updateUserLocation}
          setSearchLocation={setSearchLocation}
          setShowPref={setShowPrefModal}
          shouldUpdateUserLocation={false}
        />*/}
      </div>
      <div className={cx("search-results-wrapper")}>
        <div className={cx("search-results")}>
          <div className={cx("filter-and-sort")}>
            <Button
              label="Sort by date"
              prefixClass={cx("sort-prefix-icon")}
              Prefix={<SortDown />}
            />
            <Button
              label="Sort by soonest"
              prefixClass={cx("sort-prefix-icon")}
              Prefix={<SortDown />}
            />
            <Button
              wrapperClass={cx("filters-btn")}
              Prefix={<Filter />}
              Suffix={<div className={cx("filters-count")}>{2}</div>}
              onClick={() => setFiltersShown((s) => !s)}
            />
          </div>
          <div className={cx("search-results-inner")}>
            <h2 className={cx("heading")}>Events in {location}</h2>
            <div className={cx("event-items-wrapper")}>
              {results && results?.length ? (
                results.map((result, i) => (
                  <EventItem key={i.toString()} data={result} />
                ))
              ) : (
                <div className={cx("loading-wrapper")}>
                  {isLoading ? <LoadingRing /> : "No Event Found"}
                </div>
              )}
            </div>
          </div>
        </div>

        <Filters
          setIsVirtual={setIsVirtual}
          startDate={startDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          endDate={endDate}
          distance={distance}
          setDistance={setDistance}
          setCategory={setCategory}
          shown={filtersShown}
          hide={() => setFiltersShown(false)}
        />
      </div>
    </div>
  );
};

export default SearchContent;

