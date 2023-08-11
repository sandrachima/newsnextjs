// utils/api.ts
import axios from 'axios';

const API_KEY = '61f66d3dec6a4a8698d306c4f611112f';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      apiKey: API_KEY,
      q: query,
    },
  });

  return response.data.articles;
};
