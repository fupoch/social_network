import { Button } from "@mui/material";
import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import s from './Header.module.css'


const Header = (props) => {

  const toFupoch = () => {
    return 
  }

  return (
    
    <header className={s.header}>
        
      <div className={s.toFupochButton}>
        <NavLink to='/profile/22658'>
        <Button variant="outlined" component="span" size='small' >FUPOCH</Button>
        </NavLink>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? 
        <div>
          <NavLink to={'/profile/'+ props.userId}>{props.login}</NavLink>  <Button variant="contained" component="span" size='small' onClick={props.signOut}>Sign Out</Button>
        </div>
         : 
         <NavLink to={'/login'}>Login</NavLink>}
        
      </div>
    </header>
  )
}

export default Header;