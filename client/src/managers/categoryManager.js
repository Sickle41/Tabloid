export const getCategories = () => {
    return fetch("/api/Category").then((res)=>res.json());
}