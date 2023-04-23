import { API_URL , STRAPI_API_TOKEN }  from "./urls"

export  const fetcher = async(endpoint) =>{
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };
    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    return data;
}
export  const register = async(payload) =>{
   try {
    const options = {
        method: "Post",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };
    const res = await fetch(`${API_URL}/api/auth/local/register?populate=*`, options);
    const data = await res.json();
    return data;
   } catch (error) {
    return error;
   }
}
export  const login = async(payload) =>{
   try {
    const options = {
        method: "Post",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };
    const res = await fetch(`${API_URL}/api/auth/local?populate=*`, options);
    const data = await res.json();
    return data;
   } catch (error) {
    return error;
   }
}

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};

