import axios from "axios";

const baseURL = 'https://newsapi.org/v2';
const apiKey = '6fbaaf72b3cb46508f5bca7887a29447';
// 8bf522652b46403abd8c42d4f2f1f590
// 6fbaaf72b3cb46508f5bca7887a29447
const api = axios.create({
  baseURL,
  headers: {
    'X-Api-Key': apiKey
  }
});

const getTopHeadline = '/top-headlines/source?country=in';
const getByCategory = (category) => `/everything?q=${category}`;

export default {
  getTopHeadline: () => api.get(getTopHeadline),
  getByCategory: (category) => api.get(getByCategory(category))
};
