import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API = ({ searchQuery, currentPage, apiKey, contentType }) => {
  return axios.get(
    `/?q='${searchQuery}}&page=${currentPage}&key=${apiKey}&${contentType}&per_page=12`,
  );
};

export { API };
