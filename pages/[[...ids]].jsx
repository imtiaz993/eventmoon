// hooks
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useEffect, useContext } from "react";
import axios from "axios";
import { isCategory } from "utils/isValidCategory";
// components
import Content from "contents/EventDetails/Content/Content";
import { Seo } from "components";
import SeoData from "../utils/seo.json";
// layouts
import { BottomNavigationLayout } from "layouts";

// content
import HomeContent from "contents/HomeContent";

import { BASE_URL } from "utils/constants";
import { prefix_categories } from "utils/data";
import { fetchEvents, useEvents } from "hooks";
import dynamic from "next/dynamic";
// const HomeContent = dynamic(() => import("contents/HomeContent"));
function EventDetails({ categories, location, fetchedEvents, featuredEvents }) {
  const router = useRouter();
  let isCategoryPage;

  if (router.asPath.split("/").length === 2) {
    isCategoryPage = isCategory(router.asPath);
  } else if (router.asPath.split("/").length === 3) {
    let URL = router.asPath.split("/")[2];
    isCategoryPage = isCategory("/" + URL);
  }

  let title;
  let description;
  if (isCategoryPage) {
    const currentCategory = router.asPath.split("/")[2];
    const currentLocation = router.asPath.split("/")[1];
    const currentCategorySeo = SeoData.filter(
      (item) => item.category === currentCategory
    );
    if (currentCategorySeo.length > 0) {
      title = currentCategorySeo[0].data.title.replace(
        /Las Vegas/g,
        currentLocation.replace("-", " ")
      );
      console.log(title);
      description = currentCategorySeo[0].data.description.replace(
        /Las Vegas/g,
        currentLocation.replace("-", " ")
      );
    }
  }

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const { ids } = useRouter().query;
  let IDs;
  if (!isCategoryPage) {
    var [, , , eventId] = ids;

    IDs = eventId.split("-");
  }
  return isCategoryPage ? (
    <>
      <NextSeo
        title={title ? title : ""}
        description={description ? description : ""}
      />
      <HomeContent
        init_categories={categories}
        init_location={location}
        int_fetchedEvents={fetchedEvents}
        featuredEvents={featuredEvents}
      />
    </>
  ) : (
    <Content eventId={IDs[0]} timeId={IDs[1]} />
  );
}

EventDetails.getLayout = function getLayout(page) {
  return <BottomNavigationLayout>{page}</BottomNavigationLayout>;
};

export const getServerSideProps = async (ctx) => {
  const { ids } = ctx.query;

  let categoryPage;
  if (ctx.resolvedUrl.split("/").length === 2) {
    categoryPage = true;
  } else if (ctx.resolvedUrl.split("/").length === 3) {
    let URL = ctx.resolvedUrl.split("/")[2];
    if (isCategory("/" + URL)) {
      categoryPage = true;
    }
  } else {
    categoryPage = false;
  }

  if (categoryPage) {
    let ssr_categories = [];
    const { data } = await axios.post(`${BASE_URL}/Category`, {
      data: { userID: 0 },
    });
    const ssr_location = {
      latitude: "36.114647",
      longitude: "-115.172813",
      name: "Las Vegas",
    };

    const ssr_fetchedEvents = await fetchEvents(-3, ssr_location, 0);
    let events = [];

    if (data.Status) {
      const categories = [...prefix_categories, ...data.Results];
      ssr_categories = categories;
      events = await Promise.all([
        fetchEvents(-1, ssr_location, 0),
        fetchEvents(-2, ssr_location, 0),
        fetchEvents(-4, ssr_location, 0),
      ]);
    }

    return {
      props: {
        categories: ssr_categories,
        location: ssr_location,
        fetchedEvents: ssr_fetchedEvents
          ? { pages: [ssr_fetchedEvents] }
          : { pages: [] },
        featuredEvents: events,
      },
    };
  } else
    return {
      notFound: ids?.length !== 4,
      props: {},
    };
};

export default EventDetails;
