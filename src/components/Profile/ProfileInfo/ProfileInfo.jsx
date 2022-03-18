import React from "react";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from '../../assets/img/userPhoto.png'
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  console.log('render');
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__ava}>
      <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} />
      </div>
      <div className={s.wrapper__info}>
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
              <li>{props.profile.contacts.facebook ? <a href="{props.profile.contacts.facebook}">facebook</a> : "Facebooka нет =("}</li>
              <li>{props.profile.contacts.github ? <a href="{props.profile.contacts.github}"> github</a> : 'githuba нет =('}</li>
              <li>{props.profile.contacts.vk ? <a href='{props.profile.contacts.vk}'>vk</a> : "vk нет =("}</li>
              <li>{props.profile.contacts.twitter ? <a href="{props.profile.contacts.twitter}">twitter</a> : "twittera нет =("}</li>
              <li>{props.profile.contacts.instagram ? <a href="{props.profile.contacts.instagram}"> instagram</a> : "instagrama нет =("}</li>
              <li>{props.profile.contacts.youtube ? <a href="{props.profile.contacts.youtube}">youtube</a> : "youtuba нет =("}</li>
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
      </div>
    </div>

  )
}

export default ProfileInfo;