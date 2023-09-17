import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

// custom hooks
import { useCategories } from "hooks";
import { getCategoryId } from "utils/isValidCategory";

// components
import { Navbar, Section, Footer } from "components";
import { Events, CTA, NextEvents, BlogSlider, VenueSlider } from "./components";

// context
import { UserAuthContext } from "context/UserAuthContext";

import Subscribe from "./components/Subscribe/Subscribe";
import Eventmooner from "./components/Eventmooner/Eventmooner";

import GetApp from "./components/GetApp/GetApp";
import GetAppModal from "./components/GetAppModal/GetAppModal";
import CreateEventModal from "./components/CreateEventModal/CreateEventModal";
import EventAddedModal from "./components/EventAddedModal/EventAddedModal";
import RatingModal from "components/RatingModal/RatingModal";

const HomeContent = ({
  init_categories,
  init_location,
  int_fetchedEvents,
  featuredEvents,
}) => {
  const { userLocation } = useContext(UserAuthContext);
  const [showCategory, setShowCategory] = useState(false);
  const router = useRouter();
  const Paths = router.asPath.split("/");

  const [currentCategory, setCurrentCategory] = useState({
    Categoryid: Paths[2] ? getCategoryId(Paths[2]) : -3,
    CategoryName: Paths[2] ? Paths[2].replace("-", " ") : "Feed",
    Description: "",
  });

  const { data: categories } = useCategories(0, init_categories);

  const handleCategoryChange = (_category) => {
    setCurrentCategory(_category);
    setShowCategory(false);
    router.push(
      {
        pathname:
          _category.Categoryid === -3
            ? "/"
            : `/${userLocation.name.replace(
                " ",
                "-"
              )}/${_category.CategoryName.replace(" ", "-")}`,
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  useEffect(() => {
    console.log(userLocation);
    if (userLocation?.name) {
      router.push(
        {
          pathname:
            currentCategory.Categoryid === -3
              ? "/"
              : `/${userLocation.name.replace(" ", "-")}/${Paths[2]}`,
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [userLocation]);
  const [header, setHeader] = useState(true);

  const [isAndroid, setIsAndroid] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState();
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [eventAddedModal, setEventAddedModal] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    if (
      !Boolean(userAgent.match(/iPhone|iPad|iPod/i)) &&
      !Boolean(userAgent.match(/Android/i))
    ) {
      localStorage.setItem("getAppModal", JSON.stringify(false));
    }
    setIsIos(Boolean(userAgent.match(/iPhone|iPad|iPod/i)));
    setIsAndroid(Boolean(userAgent.match(/Android/i)));
    setIsOpenModal(JSON.parse(localStorage.getItem("getAppModal")));
  }, []);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("getAppModal")) ||
      isCreateModal ||
      eventAddedModal
    ) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenModal, isCreateModal, eventAddedModal]);

  return (
    <>
      <Navbar
        categories={categories}
        activeCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
        isDefault
        header={header}
        setHeader={setHeader}
        showCategory={showCategory}
        setShowCategory={setShowCategory}
        isHome={"scroll-hide-logo"}
        setIsCreateModal={setIsCreateModal}
      />

      <Section>
        <Events
          int_fetchedEvents={int_fetchedEvents}
          currentCategory={currentCategory}
          userLocation={userLocation}
        />

        <NextEvents
          currCategory={currentCategory}
          categories={categories}
          handleClick={handleCategoryChange}
          userLocation={userLocation}
          featuredEvents={featuredEvents}
        />
        <VenueSlider />
      </Section>
      <GetApp />
      <Eventmooner />
      <BlogSlider />
      <CTA />
      <Subscribe />
      <Footer />
      {/* <RatingModal/> */}
      {isOpenModal && (
        <GetAppModal
          setIsOpenModal={setIsOpenModal}
          isAndroid={isAndroid}
          setIsAndroid={setIsAndroid}
          isIos={isIos}
          setIsIos={setIsIos}
        />
      )}
      {isCreateModal && (
        <CreateEventModal
          isCreateModal={isCreateModal}
          setIsCreateModal={setIsCreateModal}
          setEventAddedModal={setEventAddedModal}
        />
      )}
      {eventAddedModal && (
        <EventAddedModal setEventAddedModal={setEventAddedModal} />
      )}
    </>
  );
};

export default HomeContent;
