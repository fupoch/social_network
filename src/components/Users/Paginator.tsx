import React, { useEffect, useState } from 'react'
import s from './Users.module.css'
import Pagination from '@mui/material/Pagination';



type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanges: (PageNumber:number) => void
}


let Paginator: React.FC<PropsType> = (props: PropsType, ) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages: Array<number> = [];
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }

  return <div>
    <div className={s.titleUsers}>
      <Pagination 
          count={pageCount} 
          variant="outlined" 
          shape="rounded" 
          onChange={(_, num) => props.onPageChanges(num)}
          color="primary"
          />
    </div>
  </div> 
}

export default Paginator
