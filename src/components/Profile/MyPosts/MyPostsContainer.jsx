import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPostActionCreator, } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

export default compose(
  connect(mapStateToProps,{addPost: addPostActionCreator, }),
)(MyPosts)


