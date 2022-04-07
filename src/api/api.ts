import { Axios } from "axios";
import { PhotosType, ProfileType, UserType } from "../types/types";
import { instance } from "./instance";

type GetUsersType = {
  items: Array<UserType>
  totalCount: number
  error: string
}
export const usersAPI = {
  async getUsers(currentPage: number= 1, pageSize: number = 5, term: string) {
    return instance
      .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  async unfollow(id: number) {
    return instance.delete<UniversalType>(`follow/${id}`).then(res => res.data);
  },
  async follow(id: number) {
    return instance.post<UniversalType>(`follow/${id}`).then(res => res.data);
  },
};

type PutProfileStatusType = {
  data: {
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type SavePhotoType = {
  data: {
    photos: PhotosType
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
type UniversalType = {
  data: {
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
export const profileAPI = {
  async getProfileId(userId: number) {
    return instance.get<ProfileType>("profile/" + userId).then(res => res.data);
  },
  async getProfileStatusId(userId: number) {
    return instance.get("profile/status/" + userId).then(res => res.data);
  },
  async putProfileStatusId(status: string) {
    return instance.put<PutProfileStatusType>("profile/status", { status }).then(res => res.data);
  },
  async savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<SavePhotoType>("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => res.data);
  },
  async editProfileData(profile: ProfileType) {
    return instance.put<UniversalType>("profile", profile).then(res => res.data);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodesEnumWithCaptcha {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: {
    id: number, 
    email: string, 
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number, 
  }
  resultCode: ResultCodesEnum | ResultCodesEnumWithCaptcha
  messages: Array<string>
}

export const authAPI = {
  async loginDataGet() {
   
    return instance.get<MeResponseType>("auth/me").then(res => res.data
      );
  },
  async signIn(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post<LoginResponseType>("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    }).then(res => res.data);
  },
  signOut() {
    return instance.delete("auth/login");
  },
};

type CaptchaUrlType = {
  url: string
}
export const securityAPI = {
  async getCaptchaUrl() {
    return instance.get<CaptchaUrlType>("security/get-captcha-url").then(res => res.data);
  },
};
