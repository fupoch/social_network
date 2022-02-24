import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./Friends/Friend";
import s from './Navbar.module.css'

const Navbar = (props) => {

  let friendsElements = props.state.friends.map(p => 
    <Friend name={p.name} key={p.id}/>
  )

  return (
  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile'><span >Proffile</span></NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs'>Мессенджер</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news'>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music'>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/users'>Users</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings'>Settings</NavLink>
    </div>
    <div className={s.friends}>
      <NavLink to='/friend'>Friends</NavLink>
    </div>
    <div className={s.friendsElements}>
    {friendsElements}
    </div>

  </nav>
  )
}

export default Navbar;