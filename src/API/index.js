import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.97.114.250/app/',
});

export const authApi = {
  get() {
    return instance
      .get('helpers/getUserData')
      .then(data => console.log(data));
  }
};