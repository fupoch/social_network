import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src="https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg" />
      {props.message}
      <div>
        <span>like: </span>{props.likeCount}
      </div>
    </div>
  )
}

export default Post;