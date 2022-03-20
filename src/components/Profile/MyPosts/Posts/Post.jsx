import React from "react";
import s from './Post.module.css'
import userPhoto from '../../../assets/img/userPhoto.png'
import Preloader from "../../../common/preloader/Preloader";

const Post = (props) => {
 
  // if (!props.profile) {
  //   return <Preloader/>
  // }
  return (
    
    <div className={s.item}>
      <img className={s.img} 
      src={props.profile.photos.small ? props.profile.photos.small : userPhoto}
       />
      {props.message}
      <div>
        <span>like: </span>{props.likeCount}
      </div>
    </div>
  )
}

export default Post;