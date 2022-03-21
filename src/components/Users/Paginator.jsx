import React, { useEffect, useState } from 'react'
import s from './Users.module.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme,ThemeProvider } from '@mui/material/styles';




let Paginator = (props, portionSize=10) => {

  const theme = createTheme({
    palette:{
      standart: {
        main: '#fff',
      },
      primary: {
        main: '#fbff04',
        
      },
    },
    components: {
      // Name of the component
      MuiPagination: {
        styleOverrides: {
          // Name of the slot
          primary: {
            // main: '#fbff04',
            
          },
          input: {
            
          },
        },
      },
    },
  });
  
  
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }

  return <div>
   
    <div className={s.titleUsers}>
    <Stack spacing={2}> 
    <ThemeProvider theme={theme}>
      <Pagination 
          count={pageCount} 
          variant="outlined" 
          shape="rounded" 
          onChange={(_, num) => props.onPageChanges(num)}
          color="primary"
          
        
          />
      </ThemeProvider>
   
      
    </Stack>
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


export default Paginator
