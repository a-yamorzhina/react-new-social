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
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  follow(userID) {
    return instance2.post(`follow/${userID}`)
  },

  unfollow(userID) {
    return instance2.delete(`follow/${userID}`)
  },


};

export const profileAPI = {
  profile(userID) {
    return instance.get(`profile/${userID}`)
  },

  getStatus(userID) {
    return instance2.get(`profile/status/${userID}`)
  },

  updateStatus(status) {
    return instance2.put(`profile/status/`, {status: status})
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance2.put(`profile/photo/`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
  },

  saveProfile(profile) {
    return instance2.put(`profile/`, profile)
  }
};

export const authAPI = {
  auth() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  },

  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },

  logout() {
    return instance.delete(`auth/login`)
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
