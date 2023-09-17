import axios from "axios";
import { useQuery } from "react-query";

// constants
import { BASE_URL } from "utils/constants";

export const fetchEventReviews = async (_eventId) => {
  const { data } = await axios.post(`${BASE_URL}/RatingReview`, {
    data: { eventId: _eventId },
  });

  if (data.Status) {
    return data.Results;
  } else {
    console.log(data.ErrorMessage);
    // throw new Error(data.ErrorMessage);
  }
};

/**
 * @param {number} _eventId Event Id
 * @param {array} refetchSignal to refetch the data when needed
 * @returns {import("react-query").UseQueryResult}
 */

export const useEventReviews = (_eventId) => {
  return useQuery(
    ["event-reviews", _eventId],
    () => fetchEventReviews(_eventId),
    { staleTime: Infinity }
  );
};
