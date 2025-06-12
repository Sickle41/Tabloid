const _apiUrl = "/api/Category"


export const getCategories = () => {
    return fetch("/api/Category").then((res)=>res.json());
}

export const getAllCategories = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const addCategory = (category) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    }).then((res) => res.json());
};

export const updateCategory = (category) => {
    return fetch(`${_apiUrl}/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.status; // Return the status code for success
    });
};

export const deleteCategory = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE",
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.status; // Return the status code for success
    });
};