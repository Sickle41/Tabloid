const _apiUrl = "/api/posts";

export const getAllPosts = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const createNewPost = (post) => {
  return fetch(_apiUrl,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((res)=>res.json());
};

export const getPostById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};