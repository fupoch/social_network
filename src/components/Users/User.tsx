import React from 'react'
import userPhoto from '../assets/img/userPhoto.png'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../types/types'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

type PropsType = {
  user: UserType
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const useStyles = makeStyles({
  wrapper: {
      display: 'flex',
      margin: '30px 0 10px 15%',
    },
  wrapper__avaFollow: {
      display: 'flex',
      flexDirection: 'column',
      width: '90px',
      alignSelf: 'center',
    },
  wrapper__imgAva: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 0 5px 0',
    },
  wrapper__followButton: {
      display: 'flex',
      justifyContent: 'center',
    },
  wrapper__infoUser: {
      padding: '10px',
      border: 'solid 1px rgb(97, 94, 94)',
      borderRadius:' 15px',
      boxShadow: '0px 5px 5px -5px #695cfe',
      width: '600px',
      backgroundColor: 'rgba(170, 170, 170, 0.185)',
      margin: '0 0 0 30px',
    },
  wrapper__fullName: {
      fontSize: '25px',
    },
  wrapper__status: {
    },
  wrapper__country: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  wrapper__city: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  
})
const User: React.FC<PropsType> = (props: PropsType ) => {
  const classes = useStyles(props)
  return <div>
      <div className={classes.wrapper}>
        <div className={classes.wrapper__avaFollow}>
          <div className={classes.wrapper__imgAva}>
            <NavLink to={'/profile/' + props.user.id}>
              <img style={{ height: '70px', width: '70px', borderRadius: '5px',}}src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=''/>
            </NavLink>
          </div> 
          <div className={classes.wrapper__followButton}>
            {props.user.followed ?  
          <Button variant='contained' onClick={() => {props.unfollow(props.user.id)
          }
        }>Unfollow</Button >
           : 
           <Button variant='contained' onClick={() => {
              props.follow(props.user.id)
            }
          }>Follow</Button >
           }
           </div>
        </div>
        <div className={classes.wrapper__infoUser}>
          <div className={classes.wrapper__fullName}>{props.user.name}</div>
          <div className={classes.wrapper__status}>{props.user.status}</div>
          {/* <div className={s.wrapper__country}>{"props.user.location.country"}</div>
          <div className={s.wrapper__city}>{"props.user.location.city"}</div> */}
        </div>
      </div>
  
  </div>
}

export default User