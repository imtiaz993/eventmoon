import axios from "axios";
import { useQuery } from "react-query";

// constants
import { BASE_URL } from "utils/constants";

// utils
import { getCurrentDate } from "utils/dateHelper";

/**
 * a function to fetch the details for a particular event
 * @param {string | number} timeId
 * @param {string | number} eventId
 * @param {object} userLocation
 * @param {string} userLocation.latitude
 * @param {string} userLocation.longitude
 * @returns {object} results
 */

export const fetchEventDetails = async (eventId, timeId, userLocation) => {
  let now = getCurrentDate();

  let data = {
    userId: 0,
    eventId: +eventId,
    accessToken: "",
    DateTimeNow: now.prettier.dateTimeNow,
    IsFromWeb: "1",
    timeId: +timeId,
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
  };

  const { data: responseData } = await axios({
    method: "post",
    url: `${BASE_URL}/NewEventDetail`,
    data: data,
  });

  if (responseData.Status) {
    return responseData.Results;
  } else {
    console.log(responseData.ErrorMessage);
    // throw new Error(responseData.ErrorMessage);
  }
};

/**
 * A hook to fetch and use the event details data
 *
 * @param {number | string} _timeId
 * @param {number | string} _eventId
 * @param {object} _userLocation
 * @param {string} _userLocation.latitude latitude value
 * @param {string} _userLocation.longitude longitude value
 * @param {function(): void} _onSuccess a call back function after success
 * @returns {UseQueryResult}
 */

export const useEventDetails = (_eventId, _timeId, _userLocation) => {
  return useQuery(
    ["event-details", _eventId, _timeId, _userLocation],
    () => fetchEventDetails(_eventId, _timeId, _userLocation),
    {
      enabled: Boolean(_userLocation),
      staleTime: Infinity,
    }
  );
};
