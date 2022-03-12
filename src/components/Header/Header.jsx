import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'


const Header = (props) => {
  return (
    
    <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
      <div className={s.loginBlock}>
        {props.isAuth ? <NavLink to={'/login'}>{props.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
        
      </div>
    </header>
  )
}

export default Header;