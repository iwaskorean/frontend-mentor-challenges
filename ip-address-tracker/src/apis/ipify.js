import axios from 'axios';

export default axios.create({
  baseURL: 'https://api64.ipify.org?format=json',
});
