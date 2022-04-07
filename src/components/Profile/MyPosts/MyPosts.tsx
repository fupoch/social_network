import { Button, TextField } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { PostsType, ProfileType } from "../../../types/types";
// import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControls";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

type PropsType = {
  profile: ProfileType
  newPostText: string
  posts: Array<PostsType>
  addPost: (newPostBody: string)  => void
}

const MyPosts: React.FC<PropsType> = (props: PropsType) => {
 
  let postsElement = props.posts.map(p => <Post profile={props.profile} key={p.id} message={p.message} likeCount={p.likeCount}/>).reverse()

 type ValuesType = {
  newPostText: string
 }
  let addPost = (values: ValuesType) => {
    props.addPost(values.newPostText)
  }
 
  return (
    <div className={s.postsBlock}>
      <h3>My post </h3>
      <div >
        <WithMaterialUI addPost={addPost}/>
      </div>
      <div className={s.posts}>
        {postsElement}
       
      </div>
    </div>
  )
}

const maxLength = maxLengthCreator(10)

// const AddPostForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//        <div>
       
//           <Field validate={[required, maxLength]} component={Textarea} name='newPostText' />
//         </div>
//         <div>
//         <Button onClick={props.handleSubmit} variant="contained" >New post</Button>
//         </div>
//     </form>
//   )
// }
// const AddPostFormRedux = reduxForm({form: 'postFormAdd'})(AddPostForm)

const AddPostForm = (props) => {
  return (
    <Formik
        initialValues={{ newPostText: ''}}
        
        onSubmit={props.onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="TextField" validate={[required, maxLength]} name='newPostText' />
            </div>
            <div>
            <Button type='submit' variant="contained" >New post</Button>
            </div>
          </Form>
        )
        }
        </Formik>
  )
}
type TypeWithMUIProps = {
  addPost: (newPostBody: string)  => void
}
const WithMaterialUI = (props: TypeWithMUIProps) => {
  const formik = useFormik({
    initialValues: {
      newPostText: '',
    },
    onSubmit: values => {
      props.addPost(values)
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="newPostText"
          name="newPostText"
          label="Введите "
          value={formik.values.newPostText}
          onChange={formik.handleChange}
          error={formik.touched.newPostText && Boolean(formik.errors.newPostText)}
        />
        <Button color="primary" variant="contained" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default MyPosts;