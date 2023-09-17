import { useEffect, useContext } from 'react';
import axios from 'axios';

// layouts
import { BottomNavigationLayout } from 'layouts';

// components
import { Seo } from 'components';

// content
import HomeContent from 'contents/HomeContent';

import { BASE_URL } from 'utils/constants';
import { prefix_categories } from 'utils/data';
import { fetchEvents, useEvents } from 'hooks';

export default function Home({
  categories,
  location,
  fetchedEvents,
  featuredEvents,
}) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <>
      <Seo title='Welcome to Event Moon' />
      <HomeContent
        init_categories={categories}
        init_location={location}
        int_fetchedEvents={fetchedEvents}
        featuredEvents={featuredEvents}
      />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <BottomNavigationLayout>{page}</BottomNavigationLayout>;
};

export const getServerSideProps = async () => {
  // const { userLocation } = useContext(UserAuthContext);
  let ssr_categories = [];
  const { data } = await axios.post(`${BASE_URL}/Category`, {
    data: { userID: 0 },
  });
  const ssr_location = {
    latitude: '36.114647',
    longitude: '-115.172813',
    name: 'Las Vegas',
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
      fetchedEvents: { pages: [ssr_fetchedEvents] },
      featuredEvents: events,
    },
  };
};
