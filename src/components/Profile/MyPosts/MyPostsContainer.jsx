import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

const MyPostsContainer = connect(mapStateToProps,{addPost: addPostActionCreator, onPostChange: updateNewPostTextActionCreator})(MyPosts)

export default MyPostsContainer;