import axios from "axios";
import { useQuery } from "react-query";

import { BASE_URL } from "utils/constants";
import { prefix_categories } from "utils/data";

const fetchCategories = async (_userId) => {
  const { data } = await axios.post(`${BASE_URL}/Category`, {
    data: { userID: _userId },
  });

  if (data.Status) {
    const categories = [...prefix_categories, ...data.Results];
    return categories;
  } else {
    console.log(data.ErrorMessage);
    // throw new Error(data.ErrorMessage);
  }
};

const useCategories = (_userId, _initialCategories) => {
  return useQuery(["categories", _userId], () => fetchCategories(_userId), {
    initialData: _initialCategories,
    staleTime: Infinity,
  });
};

export { useCategories, fetchCategories };
