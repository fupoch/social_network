import { Button } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileDataForm = (props) => {
  
  
  return <div className={s.wrapper__info}>
    <Formik initialValues={props.profile
     
    //   {
    //   fullname: '',
    //   lookingforajob: false, 
    //   lookingforajobdescription: 'props.profile.lookingForAJob',
    //   facebook: '',
    //   website: '', 
    //   vk: '', 
    //   twitter: '', 
    //   instagram: '', 
    //   youtube: '', 
    //   github: '',
    //   mainLink: '',
    //   aboutme: ''
    // }
  }
      onSubmit={props.onSubmit}>
    {({ isSubmitting }) => (
  <Form>
    <div className={s.wrapper__fullNameStatus}>
      <div className={s.fullname}>
        <div className={s.fullnameTitle}>Fullname:
          </div>  
          <div >{<Field type={"text"} name='fullName'/>}
          </div>
            <div className={s.wrapper__mainInfo}>
              <div className={s.wrapper__contacts}>        
                <div>Contacts:
                <ul className={s.ulContacts}>
                  {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                    contactValue={props.profile.contacts[key]} />
                  })
                  }
                </ul>
              </div>
            <div className={s.wrapper__lookingForAJob}>
              <div className={s.wrapper__booleanLookingForAjob}>
                Looking for a job: {<Field type={"checkbox"} name='lookingForAJob'/>}
              </div>
                <div className={s.wrapper__descriptionLookingForAjob}>
                Description: {<Field type={"text"} name='lookingForAJobDescription'/>}
              </div>
            </div>
            <div>
              About me:
            {<Field type={"text"} name='aboutMe'/>}
            </div>
            <div className={s.saveButton}>
              <Button  variant="contained" type="submit"  size='small' >Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Form>
    )}
    
    </Formik>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
  return <li><div className={s.contactTitle}>{contactTitle}: </div>
  <div className={s.input}>
    <Field type={"text"} name={`contacts.${contactTitle}`}/>
  </div>
  </li>
}
export default ProfileDataForm
{/* <div className={s.wrapper__info}> */}
        {/* <div className={s.wrapper__fullNameStatus}>
          <div className={s.fullname}>
          <b>Fullname</b>:  <div>{<Field type={"text"} name='fullname'/>}</div>
          </div>
        </div>
        <div className={s.wrapper__mainInfo}>
          <div className={s.wrapper__contacts}>
            Contacts:
            <ul className={s.ulContacts}>
              {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                contactValue={props.profile.contacts[key]} />
              })
              }
            </ul>
          </div>
          <div className={s.wrapper__lookingForAJob}>
            <div className={s.wrapper__booleanLookingForAjob}>
            {props.profile.lookingForAJob ? 'Ищу работу' : null}
            </div>
            <div className={s.wrapper__descriptionLookingForAjob}>
            {props.profile.lookingForAJobDescription}
            </div>
          </div>
        </div>
        <div>
          {props.isOwner && <Button onClick={props.activateEditMode} variant="contained" component="span" size='small'>
            Edit
          </Button>}
        </div>
      </div> */}