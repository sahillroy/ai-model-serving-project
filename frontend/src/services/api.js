import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const analyzeSentiment = async (text) => {
  return axios.post(`${API_URL}/sentiment`, { text });
};

export const summarizeText = async (text) => {
  return axios.post(`${API_URL}/summarize`, { text });
};

export const generateText = async (text) => {
  return axios.post(`${API_URL}/generate`, { text });
};