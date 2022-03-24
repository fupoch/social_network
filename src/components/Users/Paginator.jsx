import React, { useEffect, useState } from 'react'
import s from './Users.module.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { TablePagination } from '@mui/material';
// import { theme } from '../../theme/theme';




let Paginator = (props, portionSize=10) => {

  // const theme = createTheme({
  //   palette:{
  //     standart: {
  //       main: '#fff',
  //     },
  //     primary: {
  //       main: '#fbff04',
        
  //     },
  //   },
   
  // });

  
  
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
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
          color="neutral"
          />
    
    </div>
    
    </div>
    
}


  // return <div>
  // <div className={s.titleUsers}>
  //   <h1>Users</h1>
  //   </div>
  //     <div className={s.pageCount}>
  //       {pages.map(p => {
  //       return <span className={props.currentPage === p  && s.selectedPage} onClick={(e) => {props.onPageChanges(p)}}>{p}</span>
  //       })}
  //     </div>
    
  // </div>

  // export const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#fbff04',
  //     },
  //     secondary: {
  //       main: green[500],
  //     },
  //     neutral: {
  //       light: '#757ce8',
  //       main: '#3f50b5',
  //       dark: '#002884',
  //       contrastText: '#fff',
  //     }
  //   },
  // });

export default Paginator
