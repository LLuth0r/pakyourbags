import axios from 'axios';

const baseUrl = 'https://pakyourbags.herokuapp.com/';

const api = axios.create({
  baseURL: baseUrl
})

export default api;