import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { signIn } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControls';
import s from "../common/FormsControl/FormsControls.module.css"

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} validate={[required]}name={'email'} placeholder={'Email'}/>
      </div>
      <div>
        <Field component={Input} validate={[required]} name={'password'} type={'password'} placeholder={'Password'}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> Remember me
      </div>
      {props.error && <div className={s.global_error}>
        {props.error}
      </div>}
      
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
  
  const onSubmit =(formData) => {
    props.signIn(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
  
    return <Navigate replace
     to={'/profile/' + props.userId}
    // to={'/profile/*'}
     />
  }
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