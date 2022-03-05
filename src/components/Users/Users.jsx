import React from 'react'
import s from './Users.module.css'
import userPhoto from '../assets/img/userPhoto.png'
import { NavLink } from 'react-router-dom'



let Users = (props) => {

  
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i=1; i <= pageCount; i++) {
      pages.push(i)
    }
  return <div>
  <div className={s.titleUsers}>
    <h1>Users</h1>
  </div>
  <div className={s.pageCount}>
    {pages.map(p => {
     return <span className={props.currentPage === p  && s.selectedPage} onClick={(e) => {props.onPageChanges(p)}}>{p}</span>
    })}

  </div>
    {
    props.users.map( u => <div key={u.id}>   
      <div className={s.wrapper}>
        <div className={s.wrapper__avaFollow}>
          <div className={s.wrapper__imgAva}>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
            </NavLink>
          </div> 
          <div className={s.wrapper__followButton}>{u.followed ?  
          <button onClick={() => {props.unfollow(u.id)
          }
        }>Unfollow</button >
           : 
           <button onClick={() => {
              props.follow(u.id)
            }
          }>Follow</button >
           }
           </div>
        </div>
        <div className={s.wrapper__infoUser}>
          <div className={s.wrapper__fullName}>{u.name}</div>
          <div className={s.wrapper__status}>{u.status}</div>
          <div className={s.wrapper__country}>{"u.location.country"}</div>
          <div className={s.wrapper__city}>{"u.location.city"}</div>
        </div>
      </div>
    </div>)}
  </div>
}

export default Users