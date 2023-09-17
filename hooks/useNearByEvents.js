import axios from "axios";
import { useQuery } from "react-query";

// utils
import { getCurrentDate } from "utils/dateHelper";

// context
import { BASE_URL } from "utils/constants";

export async function fetchNearByEvents(_data) {
  let now = getCurrentDate();

  let data = {
    userId: 0,
    accessToken: "",
    latitude: _data?.latitude || "36.1251958",
    longitude: _data?.longitude || "-115.3150848",
    radius: _data?.radius || 50,
    time: now.prettier.dateTimeNow,
  };

  const { data: responseData } = await axios({
    method: "POST",
    url: `${BASE_URL}/NewNearByEvents`,
    data,
  });

  if (responseData.Status) {
    return responseData.Results.Events;
  } else {
    console.log(responseData.ErrorMessage)
    // throw new Error(responseData.ErrorMessage);
  }
}

export function useNearByEvents(_userLocation, _radius) {
  return useQuery(
    ["near-by-events", _radius || 50],
    () =>
      fetchNearByEvents({
        latitude: _userLocation?.latitude,
        longitude: _userLocation?.longitude,
        radius: _radius,
      }),
    { enabled: !!_userLocation }
  );
}
