import axios from "axios";

// constants
import { BASE_URL } from "utils/constants";

export const postReview = (_data) => {
  const response = axios({
    method: "post",
    url: `${BASE_URL}/Ratings`,
    data: _data,
  });

  return response;
};
