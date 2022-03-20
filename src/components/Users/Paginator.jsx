import React from 'react'
import s from './Users.module.css'



let Paginator = (props) => {

  
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
    
  </div>
}

export default Paginator