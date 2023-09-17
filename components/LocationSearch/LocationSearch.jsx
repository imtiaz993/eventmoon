import React, { useState } from 'react';
import classNames from 'classnames/bind';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

//assets
import Aeroplane from '../../svgs/Aeroplane';

// components
import PopularSuggestion from './PopularSuggestion';
import RenderSuggestions from './RenderSuggestions';

import styles from './LocationSearch.module.scss';

import Image from 'next/image';

const cx = classNames.bind(styles);

const LocationSearch = ({
  wrapperClass,
  userLocation,
  updateUserLocation,
  setShowPref,
  toggle,
  setSearchLocation,
  shouldUpdateUserLocation = true,
}) => {
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  // state
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingCurrent, setIsLoadingCurrent] = useState(false);

  const ref = useOnclickOutside(() => {
    if (isOpen) setIsOpen(false);
    if (value) {
      setValue('');
      clearSuggestions();
    }
  });

  const handleSelect =
    ({ description, structured_formatting: { main_text } }) =>
    () => {
      setValue(main_text, false);
      clearSuggestions();
      setIsOpen(false);

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('📍 Coordinates: ', { lat, lng });
          const _location = {
            latitude: String(lat),
            longitude: String(lng),
            name: main_text,
          };

          if (setSearchLocation) setSearchLocation(_location);
          if (!shouldUpdateUserLocation) return;
          updateUserLocation(_location);
        })
        .catch((error) => {
          console.log('😱 Error: ', error);
        });
    };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setValue('');
    }
  };

  const getCurrentLocation = () => {
    const success = (pos) => {
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;

      updateUserLocation({
        latitude: String(lat),
        longitude: String(lng),
        name: 'Your Location',
      });

      setIsLoadingCurrent(false);
      setIsOpen(false);
    };

    const error = (err) => {
      if (err.PERMISSION_DENIED || err.POSITION_UNAVAILABLE) {
        setShowPref(true);
      }

      setIsLoadingCurrent(false);
    };

    setIsLoadingCurrent(true);
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  };

  const handleSelectPopular = (_location) => {
    setIsOpen(false);

    if (!shouldUpdateUserLocation) {
      setValue(_location.main);
      return;
    }

    updateUserLocation({
      latitude: String(_location.lat),
      longitude: String(_location.lng),
      name: _location.main,
    });
  };

  return (
    <div ref={ref} className={cx('location-search-root', wrapperClass)}>
      <div className={cx('box')}>
        {!isOpen && !value && <label>{userLocation?.name || ''}</label>}
        {isLoadingCurrent && (
          <label className={cx('find-label')}>Finding your location...</label>
        )}
        <input
          type='text'
          value={value}
          onChange={handleValue}
          onClick={handleClick}
          placeholder={
            !isOpen || isLoadingCurrent ? '' : userLocation?.name || ''
          }
        />
        <Aeroplane onClick={toggle} />
      </div>
      {status === 'OK' && (
        <ul className={cx('location-drop-down')}>
          <RenderSuggestions data={data} handleSelect={handleSelect} />
        </ul>
      )}
      {status !== 'OK' && isOpen && (
        <ul className={cx('location-drop-down')}>
          <PopularSuggestion
            handleCurrentLocation={getCurrentLocation}
            handleSelect={handleSelectPopular}
          />
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;
