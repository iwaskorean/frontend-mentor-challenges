import axios from 'axios';

const KEY = 'at_xi3ViPi1hHqw49nWwDJUBT4t8IGt9';

export default axios.create({
  baseURL: 'https://geo.ipify.org/api/v1?',
  params: {
    apiKey: KEY,
  },
});
