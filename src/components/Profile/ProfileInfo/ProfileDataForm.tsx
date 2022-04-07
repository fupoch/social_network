import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Field, Form, Formik, useFormik } from 'formik'
import React from 'react'
import { ProfileType, typeDataType } from '../../../types/types'
import s from './ProfileInfo.module.css'

const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: ' 1fr 4fr',
    letterSpacing: '0.5px',
  },
  wrapper__ava: {
  margin: '0 5px 5px 0',
  background: 'rgba(170, 170, 170, 0.185)',
  borderRadius: '7px',
  height: '300px',
  },
  wrapper__info: {
    backgroundColor: 'rgba(170, 170, 170, 0.185)',
    borderRadius: '7px',
    padding: '20px 20px 30px 30px',
    margin: '0 0 0 20px'
  },
  wrapper__fullNameStatus: {
    margin: '10px 0 0 10px',
    borderBottom: 'solid 1px rgba(170, 170, 170, 0.185)',
  },
  fullname: {
    fontSize: '20px',
    lineHeight: '10px',
    margin: '0 0 10px 0'
  },
  status: {
    margin: '0 0 6px 0',
    padding: '0 0 10px 0',
    fontWeight: '100',
    fontSize: '16px',
    color: '#707070',
  },
  wrapper__mainInfo: {
    margin: '10px 0 0 10px',
    color: '#707070',
  }, 
  wrapper__contacts: {
    borderBottom: 'solid 1px rgba(170, 170, 170, 0.185)',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  UL__contacts: {
    margin: '0 0 4px 10px',
  },
  wrapper__lookingForAJob: {
    margin: '10px 0 0 10px',
  },
  wrapper__booleanLookingForAjob: {

  },
  wrapper__descriptionLookingForAjob: {
    fontWeight: '100',
    fontSize: '16px',
    lineHeight: '2',
  },
  form__TitleFullName: {
    display: 'block',
    margin: '0 0 10px 0'
  },
  form__inputFullname : {

  },
  form__fullName: {
    margin: '0 0 10px 0'
  },
  form__contacts: {
    margin: '0 0 0 20px'
  },
  form__contactsTitle: {
    display: 'block',
    margin: '0 0 20px 0'
  },
  form__contactUl: {
    margin: '0 0 0 40px'
  },
  form__contactInput: {
    display: 'flex',
    margin: '0 0 10px 0'
  },
  form__contactTitle: {
    display: 'flex',
    width: '100px',
    alignItems: 'center'
  },
  form__lookingForAJob: {
    margin: '0 0 0 40px',
    
  },
  form__jobTitle: {
    display: 'flex',
    width: '100px',
    alignItems: 'center',
    margin: '0 9px 0 0'
  },
  form__lookingForAJobDescription: {
    display: 'flex',
    margin: '0 0 10px 0'
  },
  form__aboutMe: {
    display: 'flex',
    margin: '0 0 0 40px'
  },
  form__aboutMeTitle: {
    display: 'flex',
    width: '100px',
    alignItems: 'center'
  },
  form__aboutMeInput: {
    display: 'flex',
    margin: '0 0px 10px 10px'
  }
});
type PropsType = {
  onSubmit: (formData: typeDataType) => void
  disableEditMode: () => void
  profile: ProfileType
}
const ProfileDataForm: React.FC<PropsType> = (props: PropsType) => {
  const classes = useStyles(props);
  const formik = useFormik({
    initialValues: { 
      ...props.profile
     },
    onSubmit: (values) => props.onSubmit(values)
  });
  return (
    <div className={classes.wrapper__info}>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.form__fullName}>
          <span className={classes.form__TitleFullName}>
            Fullname:
          </span>
          <div className={classes.form__inputFullname}>
            <TextField
              id="fullName"
              name="fullName"
              label="Fullname"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className={classes.form__contacts}>
        <span className={classes.form__contactsTitle}>Contacts:</span>
          <ul className={classes.form__contactUl}>
            {Object.keys(props.profile.contacts).map(key => {
              
                      return <li key={key}>
                      <div className={classes.form__contactInput}>
                        <span className={classes.form__contactTitle}>{key}:</span>
                          <TextField
                            fullWidth
                            label={key}
                            name={`contacts.${key}`}
                            value={formik.values.contacts[key]}
                            onChange={formik.handleChange}
                          />
                      </div>
                  </li>
                })
            }
          </ul>
        </div>
        <div className={classes.form__lookingForAJob}>
          <FormControlLabel control={<Checkbox  value={formik.values.lookingForAJob} />} name='lookingForAJob'  label="Looking for a job" />
          <div className={classes.form__lookingForAJobDescription}>
            <span className={classes.form__jobTitle}>Description:</span>
            <div>
              <TextField
                  fullWidth
                  id="lookingForAJobDescription"
                  name="lookingForAJobDescription"
                  label="Description"
                  // label="lookingForAJobDescription"
                  value={formik.values.lookingForAJobDescription}
                  onChange={formik.handleChange}
                />
            </div>
            
          </div>
        </div>
        <div className={classes.form__aboutMe}>
          <span className={classes.form__aboutMeTitle}>About me:</span>
           <div className={classes.form__aboutMeInput}>
              <TextField
                    fullWidth
                    id="aboutMe"
                    name="aboutMe"
                    label="About me"
                    value={formik.values.aboutMe}
                    onChange={formik.handleChange}
              />
            </div>
        </div>
      
           
             <Button  color="primary" variant="contained"  type="submit">
               SAVE
             </Button>
          
      
     </form>
    </div>
      
  )
}

// const Contact = ({contactTitle, handleChange, contactValue}) => {
  
//   const classes = useStyles();

//   return <li>
//               <div className={classes.form__contactInput}>
//               <span className={classes.form__contactTitle}>{contactTitle}:</span>
//                 <TextField
//                   name={`contacts.${contactTitle}`}
//                   value={contactValue}
//                   onChange={handleChange}
//                 />
//               </div>
//           </li>
// }
export default ProfileDataForm