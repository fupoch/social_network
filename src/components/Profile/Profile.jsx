import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
 
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__contentProfile}>
      <ProfileInfo profile={props.profile} putProfileStatus={props.putProfileStatus} status={props.status}/>
      </div>
      <div className={s.wrapper__MyPosts}>
      <MyPosts  profile={props.profile} newPostText={props.newPostText} profilePage={props.profilePage} addPost={props.addPost}/>
      </div>
   </div>
  )
}

export default Profile;