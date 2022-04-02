import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import classNames from 'classnames';
import { AiOutlineLike } from "react-icons/ai";
import { BsFillArrowRightCircleFill, BsMessenger, BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import {BiSearchAlt, BiHomeAlt, BiRightArrow } from "react-icons/bi";
import { FiUsers, FiMusic, FiLogOut } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import userPhoto from '../assets/img/userPhoto.png'
import { debounce } from '@mui/material';
import Preloader from '../common/preloader/Preloader';

const Navbar = (props) => {

const sidebarRef = React.useRef();
const toggleRef = React.useRef();
const [isActiveToggleClose, setActiveToggleClose] = useState(props.toggleClass)
const [isActiveDarkMode, setDarkMode] = useState(false)
// const [photos, setPhotos] = useState(props.photos.small)

const toggleClose = () => {
  props.setToggleClass(!isActiveToggleClose)
  setActiveToggleClose(!isActiveToggleClose)
}

const changeDarkMode = () => {
  
  props.setDarkMode(!isActiveDarkMode)
  setDarkMode(!isActiveDarkMode)
}

if (!props.profile) {
  return false
}


  return (
    <nav ref={sidebarRef} className={isActiveToggleClose ? classNames(classes.sidebar, classes.close) : classNames(classes.sidebar)}>
    <header>
      <div className={classNames(classes.image_text)}>
        <span className={classNames(classes.image)}>
          <img src=
          {
            props.photos.small ? props.photos.small :
             userPhoto} alt="logo" />
        </span>
        <div className={classNames(classes.text, classes.header_text)}>
          <span className={classNames(classes.name)}>{props.login}</span>
        </div>
      </div>
      <i  ref={toggleRef} onClick={toggleClose} className={classNames(classes.toggle)}><BiRightArrow/></i>
    </header>
    <div className={classNames(classes.menu_bar)}>
      <div className={classNames(classes.menu)}>
        <li className={classNames(classes.search_box)}>
            <i  className={classNames(classes.icon)}><BiSearchAlt/></i>
            <input type="text" placeholder="Search..." />
        </li>
        <ul className={classNames(classes.menu_links)}>
          <li className={classNames(classes.nav_link)}>
            <NavLink to='/profile/22658'><i className={classNames(classes.icon)}><BiHomeAlt/></i>
              <span className={classNames(classes.text, classes.nav_text)}>Profile</span></NavLink>
          </li>
          <li className={classNames(classes.nav_link)}>
            <NavLink to='/dialogs'><i  className={classNames(classes.icon)}><BsMessenger/></i>
              <span className={classNames(classes.text, classes.nav_text)}>Messenger</span></NavLink>
          </li>
          <li className={classNames(classes.nav_link)}>
            <NavLink to='/users'><i  className={classNames(classes.icon)}><FiUsers/></i>
              <span className={classNames(classes.text, classes.nav_text)}>Users</span></NavLink>
          </li>
          <li className={classNames(classes.nav_link)}>
          <NavLink to='/news'><i  className={classNames(classes.icon)}><HiOutlineNewspaper/></i>
              <span className={classNames(classes.text, classes.nav_text)}>News</span></NavLink>
          </li>
          <li className={classNames(classes.nav_link)}>
          <NavLink to='/settings'><i  className={classNames(classes.icon)}><AiOutlineLike/></i>
              <span className={classNames(classes.text, classes.nav_text)}>Likes</span></NavLink>
          </li>
          <li className={classNames(classes.nav_link)}>
          <NavLink to='/music'><i className={classNames(classes.icon)}><FiMusic/></i>
              <span className={classNames(classes.text, classes.nav_text)}>Music</span></NavLink>
          </li>
        </ul>
      </div>
      <div className={classNames(classes.bottom_content)}>
         
        <li onClick={props.signOut} className={classNames(classes.nav_link)}>
        <NavLink to='/login'><i  className={classNames(classes.icon)}><FiLogOut/></i>
            <span className={classNames(classes.text, classes.nav_text)}>Logout</span></NavLink>
        </li>
        
        <li className={classNames(classes.mode)} >
          {!isActiveDarkMode ? 
            <div className={classNames(classes.moon_sun)}>
            <i  className={classNames(classes.icon, classes.moon)}><BsFillMoonFill/></i>
            </div>
            :
            <div className={classNames(classes.moon_sun)}>
            <i className={classNames(classes.icon, classes.sun, classes.dark)}><BsFillSunFill/></i>
            </div>
          }
         
          <span className={classNames(classes.mode_text, classes.text)}>{!isActiveDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
          <div className={classNames(classes.toggle_switch)}>
            <span className={isActiveDarkMode ? classNames(classes.switch, classes.dark) : classNames(classes.switch)} onClick={changeDarkMode}></span>
          </div>
        </li>
        
        
      </div>
    </div>
  </nav>

  // <nav classNameN{classNames(classes.me={s.nav}>
  //   <div classNameN{classNames(classes.me={s.item}>
  //     <NavLink to='/profile/22658'><span >Proffile</span></NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.item}>
  //     <NavLink to='/dialogs'>Мессенджер</NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.item}>
  //     <NavLink to='/news'>News</NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.item}>
  //     <NavLink to='/music'>Music</NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.item}>
  //     <NavLink to='/users'>Users</NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.item}>
  //     <NavLink to='/settings'>Settings</NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.friends}>
  //     <NavLink to='/friend'>Friends</NavLink>
  //   </div>
  //   <div classNameN{classNames(classes.me={s.friendsElements}>
  //   {friendsElements}
  //   </div>

  // </nav> */}
  )
}

export default Navbar;