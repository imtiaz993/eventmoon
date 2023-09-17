import axios from "axios";

import { useMutation } from "react-query";

import { BASE_URL } from "utils/constants";

export const postReview = async (_data) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${BASE_URL}/Ratings`,
      data: _data,
    });

    if (data.Status) {
      return data.Results;
    } else {
      console.log(data.ErrorMessage)
      // throw new Error(data.ErrorMessage);
    }
  } catch (err) {
    console.log(err);
    // throw new Error(err);
  }
};

export const usePostReview = (_onSucess) => {
  return useMutation((data) => postReview(data), {
    onSuccess: _onSucess,
  });
};
