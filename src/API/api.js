import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    // "API-KEY": "88b6ce23-82c2-4b75-8595-b3c7a16fb38a"
  }
});
const instance2 = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "e4351bc4-33f0-460a-aedf-e810ec53fe11"
  }
});


export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  auth ()  {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  },

  profile (userID)  {
    return instance.get(`profile/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  follow (userID)  {
    return instance2.post(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  unfollow (userID)  {
    return instance2.delete(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  }

};
