import axios from "axios";

const API_URL = "http://localhost:5000/api/banner";

export const fetchBannerData = () => {
  return axios.get(API_URL);
};

export const updateBannerData = (bannerData) => {
  return axios.post(API_URL, bannerData);
};
