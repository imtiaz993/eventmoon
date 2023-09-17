import axios from "axios";
import { useQuery } from "react-query";

// constants
import { BASE_URL } from "utils/constants";

// utils
import { slugify } from "utils/helper";

const fetchBlogsList = async () => {
  // const { data } = await axios.post(`${BASE_URL}/Blogs`, {
  const { data } = await axios.post("https://m.eventmoon.com/api/Blogs", {
    data: {
      IsFromWeb: true,
      PageNumber: 1,
      PageSize: 10,
    },
  }) || {};


  if (data.Status) {
    const blogsList = data.Results;
    return blogsList.map((blog) => ({
      ...blog,
      BlogLink: slugify(blog.BlogTitle),
    }));
  } else {
    // throw new Error(data.ErrorMessage);
    console.log(data.ErrorMessage)
    return []

  }
};

const useBlogsList = (initialData) => {
  return useQuery("blogs-list", fetchBlogsList, { initialData });
};

export { useBlogsList, fetchBlogsList };
