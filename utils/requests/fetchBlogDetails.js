import axios from "axios";

export default async function fetchBlogDetails(_id) {
  const { data } = await axios.post("https://m.eventmoon.com/api/blogdetail", {
    data: {
      BlogId: _id,
    },
  });

  if (data.Status) {
    return data.Results;
  } else {
    console.log(data.ErrorMessage)
    // throw new Error(data.ErrorMessage);
  }
}
