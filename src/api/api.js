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
  getProfileId(userId) {
    return instance.get("profile/" + userId);
  },
};

export const authAPI = {
  loginDataGet() {
    return instance.get("auth/me");
  },
};
