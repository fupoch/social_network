import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hello all', likeCount: 12},
    {id: 2, message: "It's my first post", likeCount: 23},
  ]
  
  let postsElement = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3>My post </h3>
      <div >
        <div>
          <textarea></textarea>
        </div>
        <div>
        <button>New post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
       
      </div>
    </div>
  )
}

export default MyPosts;