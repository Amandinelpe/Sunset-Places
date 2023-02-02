import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllPosts = () => {
  return axios.get(apiUrl + `post`).then((response) => response.data);
};

export const getPostsByUserId = (userId) => {
  return axios
    .get(apiUrl + `post/user/${userId}`)
    .then((response) => response.data);
};

export const createPost = (data) => {
  return axios.post(apiUrl + `post`, data).then((response) => response.data);
};

export const updatePost = (id, data) => {
  return axios
    .put(apiUrl + `post/${id}`, data)
    .then((response) => response.data);
};

export const updatePostImage = (id, file) => {
  return axios
    .put(apiUrl + `post/upload/${id}`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export const deletePost = (postId) => {
  return axios
    .delete(apiUrl + `post/${postId}`)
    .then((response) => response.data);
};
