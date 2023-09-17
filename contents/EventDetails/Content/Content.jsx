// libraries
import classNames from 'classnames/bind';

// components
import { Navbar, Seo } from 'components';
import RightSection from '../RightSection/RightSection';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Keywords from '../Keywords/Keywords';
import ShowTime from '../ShowTime/ShowTime';
import SeeMore from '../SeeMore/SeeMore';
import MoreEvents from '../MoreEvents/MoreEvents';
import GallerySection from '../GallerySection/GallerySection';

//NewComponents
import Map from '../Map/Map';
import EventBanner from '../EventBanner/EventBanner';
import EventPictures from '../EventPictures/EventPictures';
import EventDetails from '../EventDetails/EventDetails';
import EventReviews from '../EventReviews/EventReviews';
import EventSharing from '../EventSharing/EventSharing';
import EventVenue from '../EventVenue/EventVenue';
import BookTicket from '../BookTicket/BookTicket';
import DesktopWrapper from 'components/common/DesktopWrapper/DesktopWrapper';
import MobileWrapper from 'components/common/MobileWrapper/MobileWrapper';
import FloatingContact from '../FloatingContact/FloatingContact';

import { Section } from 'components';

// hooks
import { useContext } from 'react';
import { useEventDetails, useNoScroll } from 'hooks';

// context
import { UserAuthContext } from 'context/UserAuthContext';

// styles
import styles from './Content.module.scss';
const cx = classNames.bind(styles);

const Content = ({ eventId, timeId }) => {
  const { user, userLocation } = useContext(UserAuthContext);

  const { isLoading, data: eventData } = useEventDetails(
    eventId,
    timeId,
    userLocation
  );


  // useNoScroll(!eventData || isLoading);

  return (
    <div>
      <Seo
        title={
          (eventData?.EventName && 'Event Moon | ' + eventData.EventName) ||
          'Welcome to Event Moon'
        }
      />
      <Navbar isMobHide />
      {eventData && (
        <Section>
          <EventBanner data={eventData} />
          <div className={cx('main-wrapper-root')}>
            <FloatingContact />
            <DesktopWrapper>
              <div className={cx('sections')}>
                <div className={cx('left-section')}>
                
                  <EventPictures data={eventData} />
                  <EventDetails data={eventData} />
                  <EventReviews data={eventData} />
                  <EventSharing data={eventData} />
                </div>
                <div className={cx('right-section')}>
                  <Map data={eventData} userLocation={user || userLocation} />
                  <EventVenue data={eventData} />
                </div>
              </div>
            </DesktopWrapper>

            <MobileWrapper>
              <EventDetails data={eventData} />
              <EventVenue data={eventData} />
              <Map data={eventData} userLocation={user || userLocation} />
              <EventPictures data={eventData} />
              <EventReviews data={eventData} />
              <EventSharing data={eventData} />
            </MobileWrapper>
          </div>
          <MoreEvents data={eventData} />
          <BookTicket />
          {/* <div className={cx('left-section')}>
            <Hero data={eventData} />
            <ShowTime data={eventData} />
            <Map data={eventData} userLocation={user || userLocation} />
            <GallerySection data={eventData} />
            {eventData?.PhoneNo !== '' && <Contact data={eventData} />}
            <Reviews data={eventData} />
            <Keywords data={eventData} />
          </div>
          <RightSection data={eventData} /> */}
          {/* {eventData && <SeeMore data={eventData} />} */}
        </Section>
      )}
    </div>
  );
};

export default Content;
