import axios from 'axios';

// config
import config from '../config';

// headers
import { getToken } from './token';


const { API_BASE_URL } = config;

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { Authorization: `Bearer ${getToken()}` },
});


export default http;
