import axios from 'axios';

const host = 'http://localhost:8000/';

export default axios.create({
  baseURL: host,
});
