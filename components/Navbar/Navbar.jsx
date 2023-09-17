import React, { useState, useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// components
import {
  Banner,
  CategorySlider,
  Fragment,
  ProfileIcon,
  MenuDropDown,
  UserLocation,
} from "./atoms";
import {
  Section,
  Fab,
  Logo,
  Sidebar,
  PreferenceModal,
  LocationSearch,
  SearchInput,
} from "components";

// assets
import BurgerMenu from "../../svgs/BurgerMenu";
import { GrLocation } from "react-icons/gr";

// hooks
import { useNoScroll, useIsMob } from "hooks";

// context
import { UserAuthContext } from "context/UserAuthContext";

import styles from "./Navbar.module.scss";
import SearchEvent from "components/SearchEvent/SearchEvent";
import Image from "next/image";
const cx = classNames.bind(styles);

const Navbar = ({
  categories,
  activeCategory,
  handleCategoryChange,
  isDefault,
  isMobHide,
  header = false,
  showCategory,
  setShowCategory,
  isHome,
  SearchPage,
  setIsCreateModal,
  setHeader = () => {},
}) => {
  const { userLocation, updateUserLocation, user, logout } =
    useContext(UserAuthContext);
  const router = useRouter();

  const [showPrefModal, setShowPrefModal] = useState(false);
  const [showFragment, setShowFragment] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [leftSideWidth, setLeftSideWidth] = useState(0);

  const [searchParams, setSearchParams] = useState({
    term: "",
    departure: "",
    end: "",
    location: "New York",
  });

  const leftSideRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY < 1) {
      return setHeader(true);
    }
    if (window.scrollY >= 1) {
      return setHeader(false);
    }
  };

  const toggleFragment = () => {
    setShowFragment(!showFragment);
  };

  useEffect(() => {
    if (leftSideRef?.current) {
      const el = leftSideRef.current;
      const width = window.getComputedStyle(el).width;
      setLeftSideWidth(width);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMob = useIsMob(768);

  useNoScroll(showFragment);

  const openSidebar = () => setShowSidebar(true);

  return (
    <>
      {isDefault && (
        <Banner content="Go with confidence: Check COVID-19 verification and safety requirements with the venue. Learn about our impacted event policy and FanProtect Guarantee." />
      )}

      <div className={cx("top-section")}>
        <div className={cx("inner-section")}>
          <div className={cx("left-side")} ref={leftSideRef}>
            <AnimatePresence>
              {(!showSearchBar || !isMob) && (
                <motion.div
                  style={{
                    position: isMob ? "absolute" : "relative",
                    left: 0,
                  }}
                  initial={{ x: -150 }}
                  animate={{ x: 0 }}
                  exit={{ x: -150 }}
                >
                  <Link href="/">
                    <Logo
                      wrapperClass={cx("logo-wrapper", !header ? isHome : "")}
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {isMob && (
              <div className={cx("mobile-search")}>
                {header && (
                  <div className={cx("location")}>
                    <UserLocation
                      userLocation={userLocation}
                      updateUserLocation={updateUserLocation}
                    />
                  </div>
                )}
                {isHome && !header && (
                  <SearchInput
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    wrapperClass={cx("search-input-wrapper", {
                      shown: isHome,
                    })}
                    inputClass={cx("search-input", "mobile-top-search")}
                  />
                )}
              </div>
            )}

            {!isMob && (
              <>
                {!SearchPage && (
                  <div className={cx("nav-links")}>
                    <Link href="/">
                      <a
                        className={
                          router.asPath === "/" ? cx("active-link") : ""
                        }
                      >
                        HOME
                      </a>
                    </Link>
                    <Link href="/about">
                      <a
                        className={
                          router.asPath === "/about" ? cx("active-link") : ""
                        }
                      >
                        ABOUT US
                      </a>
                    </Link>
                    <Link href="/">
                      <a
                        className={
                          router.asPath === "#" ? cx("active-link") : ""
                        }
                      >
                        OFFERS
                      </a>
                    </Link>
                    <Link href="/">
                      <a
                        className={
                          router.asPath === "#" ? cx("active-link") : ""
                        }
                      >
                        NEWS
                      </a>
                    </Link>
                    <Link href="/">
                      <a
                        className={
                          router.asPath === "#" ? cx("active-link") : ""
                        }
                      >
                        CONTACT
                      </a>
                    </Link>
                  </div>
                )}

                <div className={cx("location")}>
                  <UserLocation
                    userLocation={userLocation}
                    updateUserLocation={updateUserLocation}
                  />
                </div>
              </>
            )}
          </div>

          <div className={cx("right-side")}>
            {!user ? (
              <Link href="/login">
                <a>
                  <button className={cx("login-btn")}>Login</button>
                </a>
              </Link>
            ) : (
              <div style={{ position: "relative" }}>
                <ProfileIcon user={user} />
                <MenuDropDown handleLogout={logout} />
              </div>
            )}
            <div className={cx("mob-icon-wrapper")}>
              <span className={cx("vr-line")} />
              {user ? (
                <BurgerMenu onClick={openSidebar} />
              ) : (
                <Link href="/login">
                  <h5>Login</h5>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <SearchEvent
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>

      {isDefault && (
        <div
          className={cx(
            "bottom-section",
            !header && "bottom-section-background"
          )}
        >
          <div className={cx("bottom-inner")}>
            <CategorySlider
              data={categories}
              active={activeCategory}
              onChange={handleCategoryChange}
              showCategory={showCategory}
              setShowCategory={setShowCategory}
            />
            {!header && !showCategory && !isMob && (
              <div className={cx("not-headere-search")}>
                <SearchInput
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  wrapperClass={cx("search-input-wrapper", {
                    shown: showSearchBar,
                  })}
                  inputClass={cx("search-input")}
                />
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
            )}
            {/* <LocationSearch
              wrapperClass={cx('mob-hidden')}
              userLocation={userLocation}
              updateUserLocation={updateUserLocation}
              setShowPref={setShowPrefModal}
            /> */}

            {/* Add Event start */}
            {header && (
              <div
                className={cx("add-event")}
                onClick={() => {
                  setIsCreateModal(true);
                }}
              >
                <div className={cx("plus")}>+</div>
                <h2 className={cx("heading")}>Add Event</h2>
              </div>
            )}
          </div>
        </div>
      )}

      <PreferenceModal isOpen={showPrefModal} setIsOpen={setShowPrefModal} />

      <Fragment
        isOpen={showFragment}
        setShowPref={setShowPrefModal}
        toggle={toggleFragment}
      />

      {user && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}

      <Fab handleClick={toggleFragment} />
    </>
  );
};

export default Navbar;
