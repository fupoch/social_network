import React from "react";
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
      <MyPostsContainer 
      store={props.store}
      />
      </div>
   </div>
  )
}

export default Profile;