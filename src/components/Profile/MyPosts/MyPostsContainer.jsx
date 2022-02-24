import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";



// const MyPostsContainer = (props) => {
//   let posts = props.store.getState().profilePage.posts
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }
 
//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text)
//     props.store.dispatch(action)
//   }
  
//   return (
//     <MyPosts addPost={addPost}
//     onPostChange={onPostChange}
//     newPostText={props.store.getState().profilePage.newPostText}
//     posts={posts}
//     />
//   )
// };

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
     dispatch(addPostActionCreator())
    },
    onPostChange: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;