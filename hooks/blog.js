import axios from "axios";
import { useMutation, useQuery } from "react-query";

// constants
// import { BASE_URL } from "utils/constants";

const BASE_URL = "https://m.eventmoon.com/api";

const createPost = async (data) => {
  const { data: responseData } = await axios({
    method: "post",
    url: `${BASE_URL}/CreatePost`,
    data,
  });

  if (responseData.Status) return responseData.Results;
  else {
    console.log(responseData.ErrorMessage)
    // throw new Error(responseData.ErrorMessage);
  }
};

export const useCreatePost = () => {
  return useMutation(createPost);
};

const editPost = async (data) => {
  const { data: responseData } = await axios({
    method: "post",
    url: `${BASE_URL}/EditPost`,
    data,
  });

  if (responseData.Status) return responseData.Results;
  else {
    console.log(responseData.ErrorMessage)
    // throw new Error(responseData.ErrorMessage);
  }
};

export const useEditPost = () => {
  return useMutation(editPost);
};

const deletePost = async (blogId) => {
  const { data: responseData } = await axios({
    method: "post",
    url: `${BASE_URL}/DeletePost`,
    params: {
      blogId,
    },
  });

  if (responseData.Status) return responseData.Results;
  else {
    console.log(responseData.ErrorMessage)
    // throw new Error(responseData.ErrorMessage);
  }
};

export const useDeletePost = () => {
  return useMutation(deletePost);
};

export const getPost = async (blogId) => {
  const { data } = await axios({
    method: "post",
    url: `${BASE_URL}/ReadPost`,
    params: {
      blogId,
    },
  });

  if (data.Status) return data.Results;
  else {
    console.log(responseData.ErrorMessage)
    // throw new Error(responseData.ErrorMessage);
  }
};

export const useGetPost = (blogId) => {
  return useQuery(["get-post", blogId], () => getPost(blogId));
};

const getPosts = async (pageNumber, pageSize) => {
  const { data } = await axios({
    method: "post",
    url: `${BASE_URL}/ReadAllPosts`,
    params: {
      pageNumber,
      pageSize,
    },
  });

  if (data.Status) return data.Results;
  else {
    console.log(responseData.ErrorMessage)
    // throw new Error(responseData.ErrorMessage);
  }
};

export const useGetPosts = (pageNumber, pageSize) => {
  return useQuery(
    ["get-posts", pageNumber, pageSize],
    () => getPosts(pageNumber, pageSize),
    {
      keepPreviousData: true,
    }
  );
};
