import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";



const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>).reverse()

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
 
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  
  return (
    <div className={s.postsBlock}>
      <h3>My post </h3>
      <div >
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
        <button onClick={addPost}>New post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
       
      </div>
    </div>
  )
}

export default MyPosts;