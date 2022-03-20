import React from 'react'
import s from './Users.module.css'
import userPhoto from '../assets/img/userPhoto.png'
import { NavLink } from 'react-router-dom'

let User = (props) => {
  return <div>
      <div className={s.wrapper}>
        <div className={s.wrapper__avaFollow}>
          <div className={s.wrapper__imgAva}>
            <NavLink to={'/profile/' + props.user.id}>
              <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
            </NavLink>
          </div> 
          <div className={s.wrapper__followButton}>{props.user.followed ?  
          <button onClick={() => {props.unfollow(props.user.id)
          }
        }>Unfollow</button >
           : 
           <button onClick={() => {
              props.follow(props.user.id)
            }
          }>Follow</button >
           }
           </div>
        </div>
        <div className={s.wrapper__infoUser}>
          <div className={s.wrapper__fullName}>{props.user.name}</div>
          <div className={s.wrapper__status}>{props.user.status}</div>
          <div className={s.wrapper__country}>{"props.user.location.country"}</div>
          <div className={s.wrapper__city}>{"props.user.location.city"}</div>
        </div>
      </div>
  
  </div>
}

export default User