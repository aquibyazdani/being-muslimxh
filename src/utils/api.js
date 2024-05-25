// src/utils/api.js
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_HOST}`; // Update with your base URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Function for GET requests with optional success/error callbacks
export const getData = async (endpoint, onSuccess, onError) => {
  try {
    const response = await axiosInstance.get(endpoint);
    if (onSuccess) {
      onSuccess(`GET request successful: ${endpoint}`); // Trigger success callback
    }
    return response.data;
  } catch (error) {
    let errorMessage = "";

    if (error.response) {
      errorMessage = `GET Error [${error.response.status}]: ${error.response.data}`;
    } else if (error.request) {
      errorMessage = "GET Error: No response from server.";
    } else {
      errorMessage = `GET Error: ${error.message}`;
    }

    console.error(errorMessage);
    if (onError) {
      onError(errorMessage); // Trigger error callback
    }

    throw error; // Re-throw to let the caller handle it
  }
};

// Function for POST requests with optional success/error callbacks
export const postData = async (endpoint, data, onSuccess, onError) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    if (onSuccess) {
      onSuccess(`POST request successful: ${response.data.message}`); // Trigger success callback
    }
    return response.data;
  } catch (error) {
    let errorMessage = "";

    if (error.response) {
      errorMessage = `POST Error [${error.response.status}]: ${error.response.data}`;
    } else if (error.request) {
      errorMessage = "POST Error: No response from server.";
    } else {
      errorMessage = `POST Error: ${error.message}`;
    }

    console.error(errorMessage);
    if (onError) {
      onError(errorMessage); // Trigger error callback
    }

    throw error;
  }
};
