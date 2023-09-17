import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import classNames from "classnames/bind";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import PopularSuggestion from "./PopularSuggestion";
import { GrLocation } from "react-icons/gr";
import styles from "./UserLocation.module.scss";
import { popular_location } from "./data";
import moment from "moment/moment";

const cx = classNames.bind(styles);
const Location = ({
  userLocation,
  updateUserLocation,
  setSearchLocation,
  shouldUpdateUserLocation = true,
}) => {
  Geocode.setApiKey("AIzaSyDsp303ZVhD6q0mrQUw28bx4iPjeuFWWw4");
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect =
    ({ description, structured_formatting: { main_text } }) =>
    () => {
      // setValue(main_text, false);
      clearSuggestions();
      setIsOpen(false);

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("📍 Coordinates: ", { lat, lng });
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
          console.log("😱 Error: ", error);
        });
    };

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setValue("");
    }
  };

  const getCurrentLocation = () => {
      
    //if there is no object for tracker then set an empty one (this will happen when a website loaded only the first time on a browser)
       if (!JSON.parse(localStorage.getItem("current-location-api-tracker"))) {
        localStorage.setItem(
          "current-location-api-tracker",
          JSON.stringify({ lastAPICall: "", counter: 0 })
        );
      }

    const success = (pos) => {
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;

   
      Geocode.fromLatLng(lat, lng).then(
        (response) => {
          const address = response.results[0].formatted_address;
          let city, state, country;
          for (
            let i = 0;
            i < response.results[0].address_components.length;
            i++
          ) {
            for (
              let j = 0;
              j < response.results[0].address_components[i].types.length;
              j++
            ) {
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "administrative_area_level_1":
                  state = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }

          console.log(city, state, country);
          console.log(address);
          updateUserLocation({
            latitude: String(lat),
            longitude: String(lng),
            name: state,
          });
          const lastRecord = JSON.parse(
            localStorage.getItem("current-location-api-tracker")
          );

          //increementing the counter after location fetch
          localStorage.setItem(
            "current-location-api-tracker",
            JSON.stringify({
              lastAPICall:
                lastRecord.counter === 0 ? new Date() : lastRecord.lastAPICall,
              counter: lastRecord.counter + 1,
            })
          );
        },
        (error) => {
          console.error(error);
        }
      );

      setIsOpen(false);
    };

    const error = (err) => {
      if (err.PERMISSION_DENIED || err.POSITION_UNAVAILABLE) {
        handleSelectPopular(popular_location[0]);
        setIsOpen(false);
      }
    };

    let fetchLocation = true;

    const APITrackRecords = JSON.parse(
      localStorage.getItem("current-location-api-tracker")
    );

    const CurrentDate = new Date();
    const nowDate = moment(CurrentDate).format("DD-MM-YYYY");
    const nowHour = Number(moment(CurrentDate).format("HH"));
    const nowMinute = Number(moment(CurrentDate).format("mm"));

    const LastAPICallDate = APITrackRecords.lastAPICall;
    const lastCallDate = moment(LastAPICallDate).format("DD-MM-YYYY");
    const lastCallHour = Number(moment(LastAPICallDate).format("HH"));
    const lastCallMinute = Number(moment(LastAPICallDate).format("mm"));

    //reset tracker if request made after 60 minutes or in diff date
    if (
      nowDate !== lastCallDate ||
      nowHour * 60 + nowMinute - (lastCallHour * 60 + lastCallMinute) > 60
    ) {
      {
        localStorage.setItem(
          "current-location-api-tracker",
          JSON.stringify({
            lastAPICall: "",
            counter: 0,
          })
        );
      }
    }

    //restrict location fetch if request made 4th time with same date and same 60 minutes
    if (
      APITrackRecords.counter === 3 &&
      nowDate === lastCallDate &&
      nowHour * 60 + nowMinute - (lastCallHour * 60 + lastCallMinute) <= 60
    ) {
      {
        fetchLocation = false;
      }
    }

    //if no restriction, then fetch location
    if (fetchLocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    }

    //counter reached 3 and user again request for location (it will just close the modal)
    if (APITrackRecords.counter === 3) {
      setIsOpen(false);
    }
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

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("location-credential"))) {
      getCurrentLocation();
    }
  }, []);
  return (
    <div>
      {status !== "OK" && isOpen && (
        <ul className={cx("location-drop-down")}>
          <PopularSuggestion
            handleCurrentLocation={getCurrentLocation}
            handleSelect={handleSelectPopular}
          />
        </ul>
      )}
      <div onClick={handleClick} className={cx("get-location")}>
        <GrLocation />
        <span>{userLocation?.name}</span>
      </div>
    </div>
  );
};

export default Location;
