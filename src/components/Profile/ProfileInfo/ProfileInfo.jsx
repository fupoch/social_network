import React from "react";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from '../../assets/img/userPhoto.png'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Button, IconButton, Input } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styled from "@emotion/styled";


const ProfileInfo = (props) => {

// let {editMode, setEditMode} = React.setState()
const Input = styled('input')({
  display: 'none',
});
const onMainPhotoSelected = (e) => {
  if (e.target.files.length) {
    props.savePhoto(e.target.files[0])
  }
}
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__ava}>
      <img src={props.profile.photos.large || userPhoto} />
      { props.isOwner &&  
      // <input type="file" onChange={onMainPhotoSelected}/> }
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={onMainPhotoSelected}/>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
      </label>
     }

      </div>
      {/* {editMode ? <ProfileDataForm profile={props.profile}/> :  */}
      <ProfileData profile={props.profile} putProfileStatus={props.putProfileStatus} status={props.status} isOwner={props.isOwner}/>
      {/* } */}
    </div>

  )
}


const ProfileDataForm = (props) => {
  return 
}
const ProfileData = (props) => {
  return <div className={s.wrapper__info}>
        <div className={s.wrapper__fullNameStatus}>
          <div className={s.fullname}>
            <h4>{props.profile.fullName}</h4>
          </div>
          <div className={s.status}>
            <ProfileStatusWithHooks putProfileStatus={props.putProfileStatus} status={props.status}/>
            
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
          <Button variant="contained" component="span" size='small'>
            Edit
          </Button>
        </div>
      </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <li>{contactValue ? <a href={contactValue}> {contactTitle}</a> : `${contactTitle} нет =(`}</li>
}

export default ProfileInfo;