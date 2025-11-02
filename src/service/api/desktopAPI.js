import axios from 'axios';

const API_URL = import.meta.env.VITE_MOCKAPI_API_DESKTOP_URL;

const getAllDesktop = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to get data films');
  }
};

const getDesktopById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to get data films');
  }
};

const createDesktop = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to get data films');
  }
};

const updatePutDesktop = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const updatePatchDesktop = async (id, data) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const deleteAllDesktop = async () => {
  try {
    const response = await axios.delete(API_URL);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const deleteDesktopById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const desktopAPI = { getAllDesktop, getDesktopById, createDesktop, updatePutDesktop, updatePatchDesktop, deleteAllDesktop, deleteDesktopById };

export default desktopAPI;
