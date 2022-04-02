import { Button, Checkbox, debounce, FormControlLabel, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { compose } from 'redux';
// import { Field, reduxForm } from 'redux-form'
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik'
import * as yup from 'yup';
import { signIn } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { Input, CreateField } from '../common/FormsControl/FormsControls';
import s from "../common/FormsControl/FormsControls.module.css"
import { AppStateType } from '../../redux/reduxStore';
import { makeStyles } from '@mui/styles';
import { flexbox } from '@mui/system';




type LoginFormType = {
  isAuth: boolean,
  userId: number,
  captchaUrl: string
  onSubmit: (formData: formDataType) => void
}

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
});



const useStyles = makeStyles({
  root: {
    // backgroundColor: 'red',
    margin: '15px',
    marginRight: '20px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
  },
  root__content: {
    backgroundColor:' #f6f5ff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  root__input: {
    margin: '20px',
  }
});

const LoginForm: React.FC<LoginFormType> = (props: LoginFormType) => {
  const formik = useFormik({
    initialValues: { email: '', password: '',  rememberMe: false,
    captcha: ''},
    validationSchema: validationSchema,
    onSubmit: (values) => props.onSubmit(values)
  });

  const classes = useStyles(props);

  return (
    <div className={classes.root__content}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.root__input}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        </div>
        <div className={classes.root__input}>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        </div>
        <div className={classes.root__input}> 
            <FormControlLabel control={<Checkbox defaultChecked />} name='rememberMe' label="Remember me" />
        </div>
        {props.captchaUrl && 
            <div>
              <div>
                <img src={props.captchaUrl}/>
              </div>
              <div>
                <TextField 
                  value={formik.values.captcha} 
                  type="text" 
                  name="captcha"
                  id="captcha"
                  label="captcha"
                  onChange={formik.handleChange}
                  />
              </div>
            </div>}
            <div className={classes.root__input}>
              <Button  color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </div>
       
      </form>
    </div>
  );
};

// const LoginForm: React.FC<LoginFormType> = (props: LoginFormType ) => {
//   return (
//     <Formik
//         initialValues={{ email: '', password: '',  rememberMe: false,
//         captcha: ''}}
        
//         onSubmit={props.onSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//             </div>
//             <div>
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             </div>
//             {props.captchaUrl && 
//             <div>
//               <div>
//                 <img src={props.captchaUrl}/>
//               </div>
//               <div>
//                 <Field type="text" name="captcha" />
//               </div>
//             </div>}
//             <Button  variant='outlined' type="submit" >
//               Submit
//             </Button>
//             <div> 
//             <FormControlLabel control={<Checkbox defaultChecked />} name='rememberMe' label="Remember me" />
//             </div>

//           </Form>
//         )}
//       </Formik>
//   )
// }



type PropsMSTPType = {
  isAuth: boolean,
  userId: number,
  captchaUrl: string | null
}
type PropsMDTPType = {
  signIn: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type PropsOwnType = {}
type PropsType = PropsMSTPType & PropsMDTPType & PropsOwnType

type formDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}
const Login: React.FC<PropsType> = (props: PropsType) => {
  const classes = useStyles(props);
  const onSubmit = (formData: formDataType) => {
    props.signIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
      
    if (props.isAuth) {
      return <Navigate  to={"/profile/" + props.userId}/>
    } 
  return <div className={classes.root}>
  <h1 style={{margin: '20px', display: 'flex', justifyContent: 'center'}}>Login</h1>
  <LoginForm 
  isAuth={props.isAuth} 
  userId={props.userId}
  onSubmit={onSubmit}
  captchaUrl={props.captchaUrl}/>
</div>
}
  


const mapStateToProps = (state: AppStateType): PropsMSTPType => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
  captchaUrl: state.auth.captchaUrl
})
export default compose
(connect<PropsMSTPType, PropsMDTPType, null,  AppStateType>(mapStateToProps, 
  {signIn}
  ),
)
(Login)