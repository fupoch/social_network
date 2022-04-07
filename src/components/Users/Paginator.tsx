import React from 'react';
import Pagination from '@mui/material/Pagination';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanges: (PageNumber:number) => void
}

const Paginator: React.FC<PropsType> = (props: PropsType, ) => {

  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages: Array<number> = [];
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }

  return <div>
      <Pagination 
          count={pageCount} 
          variant="outlined" 
          shape="rounded" 
          onChange={(_, num) => props.onPageChanges(num)}
          color="primary"
          />
  </div> 
}

export default Paginator
