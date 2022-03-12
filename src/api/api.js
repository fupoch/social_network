import { instance } from "./instance";

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfileId(userId) {
    return instance.get("profile/" + userId);
  },
  getProfileStatusId(userId) {
    return instance.get("profile/status/" + userId);
  },
  putProfileStatusId(status) {
    return instance.put("profile/status", { status });
  },
};

export const authAPI = {
  loginDataGet() {
    return instance.get("auth/me");
  },
  signIn(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  signOut() {
    return instance.delete("auth/login");
  },
};
