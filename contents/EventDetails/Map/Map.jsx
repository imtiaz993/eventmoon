// libraries
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  InfoWindow,
} from 'react-google-maps';

// components
import Image from 'next/image';

// styles
import styles from './Map.module.scss';

const cx = classNames.bind(styles);

const Map = ({ data, mapStyles, userLocation }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (data) {
      setPosition({
        lat: +data?.Latitude,
        lng: +data?.Longitude,
      });
    }
  }, [data]);

  const MyMapComponent = withGoogleMap(() => (
    <GoogleMap
      // defaultZoom={15}
      defaultCenter={position}
      center={position}
      zoom={18}
      defaultOptions={{
        keyboardShortcuts: false,
        disableDefaultUI: true,
      }}
      options={{
        styles: mapStyles,
      }}
    >
      <Marker position={position} icon={'/assets/images/map-icon.png'}>
        <InfoWindow>
          <div className={cx('info')}>
            <Image
              src={`/api/imageproxy?=${encodeURIComponent(data?.Image)}`}
              alt='...'
              width={160}
              height={90}
            />
            <div>
              <h4>{data?.EventName}</h4>
              <h5>{data?.Location}</h5>
              <h6>{data?.StartTime}</h6>
            </div>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ));

  return (
    <div className={cx('event-map')}>
      <h1 className={cx('event-heading')}>Maps</h1>
      <h1 className={cx('mobile-heading')}>More events this Thursday</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cx('map', 'event-detail-map')}
        id='map'
      >
        {position && (
          <MyMapComponent
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCqZEpdBk5ErumVxJIJBbC20_XhqLZedtM&v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className={cx('container')} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
      </motion.div>
      <button className={cx('see-more-events')}>See more Events</button>
    </div>
  );
};

export default Map;

Map.defaultProps = {
  mapStyles: [
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6195a0',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#f2f2f2',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.attraction',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.attraction',
      elementType: 'labels.text.fill',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#e6f3d6',
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi.sports_complex',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#f4d2c5',
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#4e4e4e',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#f4f4f4',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#787878',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.station.bus',
      elementType: 'geometry.fill',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#ccfb85',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#eaf6f8',
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#eaf6f8',
        },
      ],
    },
  ],
};
