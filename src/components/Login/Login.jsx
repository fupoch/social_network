import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { signIn } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input, CreateField } from '../common/FormsControl/FormsControls';
import s from "../common/FormsControl/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {

  return (
    <form onSubmit={handleSubmit}>
        {CreateField('Email', 'email', required, Input)}
        {CreateField('Password', 'password', required, Input, {type: 'password'})}
        {/* {CreateField(null, 'rememberMe', required, Input, {type: "checkbox"}, "remember me")} */}
      <div>
        <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> Remember me
      </div>
      {error && <div className={s.global_error}>
        {error}
      </div>}
      
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
  
  const onSubmit = (formData) => {
    props.signIn(formData.email, formData.password, formData.rememberMe)
    }
  
    let navigate = useNavigate()
 
  useEffect(() => { if (props.isAuth) {
    return navigate('/profile/' + props.userId)
    // <Navigate replace={'/login/'}
    //  to={'/profile/' + props.userId}
    //  />   
  }}, [props.userId])
   
  
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
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