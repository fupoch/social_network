import { Button, Checkbox, debounce, FormControlLabel } from '@mui/material';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { compose } from 'redux';
// import { Field, reduxForm } from 'redux-form'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { signIn } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input, CreateField } from '../common/FormsControl/FormsControls';
import s from "../common/FormsControl/FormsControls.module.css"

const LoginForm = (props) => {


  return (
    <Formik
        initialValues={{ email: '', password: '' }}
        
        onSubmit={props.onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            </div>
            <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            </div>
            <Button  variant='outlined' type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <div>
              
            <FormControlLabel control={<Checkbox defaultChecked />} name='rememberMe' label="Remember me" />
            </div>

          </Form>
        )}
      </Formik>
  )
}





const Login = (props) => {
  

  const onSubmit = (formData) => {
    props.signIn(formData.email, formData.password, formData.rememberMe)
    
    }
  
  // let navigate = useNavigate()
  // // useEffect(() => { 
  // //   if (props.isAuth === true) {
  // //   navigate('/profile/' + props.userId)
  // //   // <Navigate replace={'/login/'}
  // //   //  to={'/profile/' + props.userId}
  // //   //  />   
  // // }}, [props.isAuth])
  
    
    if (props.isAuth) {
      return <Navigate  to={"/profile/" + props.userId}/>
    } 
   
  
      
  return <div>
  <h1>Login</h1>
  <LoginForm isAuth={props.isAuth} 
  userId={props.userId}
  onSubmit={onSubmit}/>
</div>
}
  


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})
export default compose
(connect(mapStateToProps, 
  {signIn}
  ),
)
(Login)