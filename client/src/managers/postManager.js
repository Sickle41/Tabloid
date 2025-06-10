const _apiUrl = "/api/posts";

export const getAllPosts = () => {
  return fetch(_apiUrl).then((res) => res.json());
};