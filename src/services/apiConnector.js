import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    // Add Authorization header if a token is provided
    const finalHeaders = headers ? { ...headers } : {};
    if (headers && headers.Authorization) {
        finalHeaders.Authorization = headers.Authorization;
    }

    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: finalHeaders,
        params: params ? params : null,
    });
};
