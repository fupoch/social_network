import React from "react";
import { PhotosType, PostsType, ProfileType } from "../../types/types";
import Preloader from "../common/preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
      profile: ProfileType 
      status: string 
      putProfileStatus: (status: string) => void
      newPostText: string
      posts: Array<PostsType>
      addPost: (newPostBody: string)  => void
      isOwner: boolean
      savePhoto: (file: PhotosType) => void
      editProfileData: (profile: ProfileType) => void
}

const Profile: React.FC<PropsType> = (props: PropsType) => {

  if (!props.profile) {
    return <Preloader/>
  }


  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__contentProfile}>
      <ProfileInfo editProfileData={props.editProfileData} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} putProfileStatus={props.putProfileStatus} status={props.status}/>
      </div>
      <div className={s.wrapper__MyPosts}>
      <MyPosts  profile={props.profile} newPostText={props.newPostText} posts={props.posts} addPost={props.addPost}/>
      </div>
   </div>
  )
}

export default Profile;