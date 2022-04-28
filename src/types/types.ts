export type ContactsType = { 
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null 
  large: string | null 

}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  aboutMe: string
}

export type PostsType = {
  id: number
  message: string
  likeCount: number
}

export type UserType = {
  id: number 
  name: string 
  status: string
  photos: PhotosType
  followed: boolean
}

export type typeDataType = {
  aboutMe: string
  contacts: ContactsType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: PhotosType
  userId: number
}