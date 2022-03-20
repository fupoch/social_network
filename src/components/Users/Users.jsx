import React from 'react'
import s from './Users.module.css'
import Paginator from './Paginator'
import User from './User'

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }
  
  return <div>
  <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} onPageChanges={props.onPageChanges} pageSize={props.pageSize}/>
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