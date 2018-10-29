import axios from 'axios';

// headers
import { getToken } from './token';

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

export default axios;
