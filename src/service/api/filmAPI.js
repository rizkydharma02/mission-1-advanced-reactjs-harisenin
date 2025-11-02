import axios from 'axios';

const API_URL = import.meta.env.VITE_MOCKAPI_API_FILMS_URL;

const getAllFilm = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to get data films');
  }
};

const getFilmById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to get data films');
  }
};

const createFilm = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to get data films');
  }
};

const updatePutFilm = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const updatePatchFilm = async (id, data) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const deleteAllFilm = async () => {
  try {
    const response = await axios.delete(API_URL);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const deleteFilmById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message?.data?.message || 'Failed to get data films');
  }
};

const filmAPI = {
  getAllFilm,
  getFilmById,
  createFilm,
  updatePutFilm,
  updatePatchFilm,
  deleteAllFilm,
  deleteFilmById,
};

export default filmAPI;
