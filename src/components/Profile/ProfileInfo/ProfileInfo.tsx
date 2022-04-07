import React, { Props } from "react";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from '../../assets/img/userPhoto.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Button, IconButton, Input } from "@mui/material";
import { makeStyles } from '@mui/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styled from "@emotion/styled";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import ProfileDataForm from "./ProfileDataForm";
import { ContactsType, PhotosType, ProfileType, typeDataType } from "../../../types/types";

type PropsType = {
  editProfileData: (profile: ProfileType) => void 
  savePhoto: (file: PhotosType) => void
  isOwner: boolean
  profile: ProfileType
  putProfileStatus: (status: string) => void
  status: string
}

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
    borderBottom: 'solid 1px rgba(170, 170, 170, 0.185)',
  },
  wrapper__booleanLookingForAjob: {

  },
  wrapper__descriptionLookingForAjob: {
    fontSize: '16px',
    lineHeight: '2',
    fontWeight: '600'
  },
  wrapper__aboutMe: {
    margin: '10px 0 0 10px',
  },
  wrapper__aboutMeDescription: {
    fontSize: '16px',
    lineHeight: '2',
    fontWeight: '600'
  }
});


const ProfileInfo: React.FC<PropsType> = (props: PropsType) => {

let [editMode, setEditMode] = React.useState(false)
const Input = styled('input')({
  display: 'none',
});
const onMainPhotoSelected = (e) => {
  if (e.target.files.length) {
    props.savePhoto(e.target.files[0])
  }
}

const onSubmit = async (formData: typeDataType) => {
  debugger
  await props.editProfileData(formData) 
  setEditMode(false)
  
}
const classes = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__ava}>
      <img style={{width: '250px',
                    borderRadius: '7px',
                    display: 'block',
                    margin: '0% auto',
                    marginTop: '10px',}} 
      src={props.profile.photos.large || userPhoto} alt='logo'/>
      { props.isOwner &&  
      // <input type="file" onChange={onMainPhotoSelected}/> }
      <label  htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={onMainPhotoSelected}/>
        <IconButton style={{display: 'flex', justifyContent: 'center'}} color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
      </label>
     }

      </div>
      {editMode ? <ProfileDataForm onSubmit={onSubmit} disableEditMode={() => {setEditMode(false)}} profile={props.profile}/> : 
      <ProfileData
       activateEditMode={() => {setEditMode(true)}}
       profile={props.profile} putProfileStatus={props.putProfileStatus} status={props.status} isOwner={props.isOwner}/>
      }
    </div>

  )
}


type PropsProfileDataType = {
  activateEditMode: () => void
  profile: ProfileType
  putProfileStatus: (status: string) => void 
  status: string 
  isOwner: boolean
} 

const ProfileData: React.FC<PropsProfileDataType> = (props: PropsProfileDataType) => {
  const classes = useStyles(props);
  return <div className={classes.wrapper__info}>
        <div className={classes.wrapper__fullNameStatus}>
          <div className={classes.fullname}>
            <h4>{props.profile.fullName}</h4>
          </div>
          <div className={classes.status}>
            <ProfileStatusWithHooks putProfileStatus={props.putProfileStatus} status={props.status}/>
          </div>
          
        </div>
        <div className={classes.wrapper__mainInfo}>
          <div className={classes.wrapper__contacts}>
            Contacts:
            <ul >
              {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                contactValue={props.profile.contacts[key]} />
              })
              }
            </ul>
          </div>
          <div className={classes.wrapper__lookingForAJob}>
            <div className={classes.wrapper__booleanLookingForAjob}>
            {props.profile.lookingForAJob ? 'Ищу работу' : null}
            </div>
            {props.profile.lookingForAJob ? <div className={classes.wrapper__descriptionLookingForAjob}>
            {props.profile.lookingForAJobDescription}
            </div>
            :
            null}
          </div>
        <div className={classes.wrapper__aboutMe}>
          <span>About me:</span>
          <div className={classes.wrapper__aboutMeDescription}>
            {props.profile.aboutMe}
            </div>
        </div>
        </div>
        <div>
          {props.isOwner && <Button style={{margin: '10px 0 0 20px'}} onClick={props.activateEditMode} variant="contained" component="span" size='small'>
            Edit
          </Button>}
        </div>
      </div>
}

const Contact = ( {contactTitle, contactValue}) => {
  const classes = useStyles()
  return <div className={classes.UL__contacts}>{contactValue ? <a  style={{color: '#707070', textDecoration: 'none', fontWeight: '600'}}href={contactValue}> {contactTitle}</a> : null}</div>
}

export default ProfileInfo;