import classNames from "classnames/bind";

import { fetchSearchEvents } from "utils/network";

// hooks
import { useState, useContext,useEffect } from "react";
import { useNoScroll, useDebounce } from "hooks";

// context
import { UserAuthContext } from "context/UserAuthContext";

// styles
import styles from "./SearchInput.module.scss";

// assets
import Search from "../../svgs/Search";

// components
import { Input } from "components";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";
import SearchDropdown from "./SearchDropdown/SearchDropdown";

const cx = classNames.bind(styles);

/**
 * main events search input
 *
 * @param {object} props
 * @param {string} props.wrapperClass
 * @param {string} props.value getter variable search term
 * @param {function(string): void} props.setValue setter function of search term
 * @returns search input
 */

const SearchInput = ({
  wrapperClass,
  inputClass,
  value,
  setValue,
  searchParams,
  setSearchParams,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { userLocation } = useContext(UserAuthContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [inFocus, setInFocus] = useState(false);

  const debouncedSearchTerm = useDebounce(value || searchTerm, 500);
  const debouncedInFocus = useDebounce(inFocus, 200);
  let isVirtual=null
  let distance=null
  let category=null


  const searchFetch = async (term) => {
    setLoading(true);

    const response = await fetchSearchEvents(
      term,
      searchParams.departure,
      searchParams.end,
      isVirtual,
      distance,
      category,
      userLocation
    );
    setData(response);
    setLoading(false);
  };
  return (
    <div
      className={cx("search-input-root", wrapperClass)}
      onFocus={() => setInFocus(true)}
      onBlur={() => setInFocus(false)}
    >
      <Input
        placeholder="Search anything"
        wrapperClass={cx("search-input","mobile-top-search")}
        inputWrapperClass={cx(inputClass)}
        prefixClass={cx("prefix-icon")}
        Prefix={<Search />}
        // onFocus={() => setInFocus(true)}
        // onBlur={() => setInFocus(false)}
        // value={value || searchTerm}
        value={searchParams?.term}
        onChange= {  (event)  => {
          setSearchParams({ ...searchParams, term: event.target.value });

          setValue
            ? setValue(event.target.value)
            : setSearchTerm(event.target.value);

          searchFetch(event.target.value);
        }}
      />
      <SearchSuggestions
        setSearchTerm={setValue || setSearchTerm}
        searchTerm={debouncedSearchTerm}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        shown={debouncedInFocus}
        userLocation={userLocation}
        setInFocus={setInFocus}
      />
      <SearchDropdown
        userLocation={userLocation}
        searchTerm={debouncedSearchTerm}
        inFocus={debouncedInFocus}
        showDropdown={value}
        data={data}
        isLoading={loading}
      />
    </div>
  );
};

export default SearchInput;
