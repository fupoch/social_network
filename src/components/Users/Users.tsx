import React from 'react'
import s from './Users.module.css'
import Paginator from './Paginator'
import User from './User'
import { UserType } from '../../types/types'


type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanges: (PageNumber:number) => void
  users: Array<UserType>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

let Users: React.FC<PropsType> = (props: PropsType) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }
  
  return <div>
  <Paginator totalUsersCount={props.totalUsersCount} onPageChanges={props.onPageChanges} pageSize={props.pageSize}/>
    {
    props.users.map( u => <User 
                            key={u.id}
                            user={u}
                            unfollow={props.unfollow}
                            follow={props.follow}
                            /> 
    )}
  </div>
}

export default Users