import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.97.114.250:11274/app/api/public/v1/'
});

export const authApi = {
  get() {
    return instance
      .get('helpers/getUserData')
      .then(data => console.log(data));
  }
};

export const reservoireAPI = {
  list() {
    return instance
      .get('reservoir/all')
      .then(data => data.data);
  },
  one(id) {
    return instance
      .get(`reservoir/${id}`)
      .then(data => data.data);
  }
}