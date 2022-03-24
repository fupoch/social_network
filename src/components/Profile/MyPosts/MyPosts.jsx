import { Button, TextField } from "@mui/material";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControls";

import s from './MyPosts.module.css'
import Post from "./Posts/Post";



const MyPosts = (props) => {
 
  let postsElement = props.profilePage.posts.map(p => <Post profile={props.profile} message={p.message} likeCount={p.likeCount}/>).reverse()
 
  let addPost = (values) => {
    props.addPost(values.newPostText)
  }
  
  
  return (
    <div className={s.postsBlock}>
      <h3>My post </h3>
      <div >
        <AddPostFormRedux onSubmit={addPost}/>
      </div>
      <div className={s.posts}>
        {postsElement}
       
      </div>
    </div>
  )
}

const maxLength = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
       <div>
       
          <Field validate={[required, maxLength]} component={Textarea} name='newPostText' />
        </div>
        <div>
        <Button onClick={props.handleSubmit} variant="contained" >New post</Button>
        </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'postFormAdd'})(AddPostForm)

export default MyPosts;