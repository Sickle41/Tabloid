export const getAllUserProfiles = () => {
  return fetch("/api/userprofile").then((res) => {
    return res.json();
  });
};