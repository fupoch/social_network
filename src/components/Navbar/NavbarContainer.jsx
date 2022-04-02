import React from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { signOut, setToggleClass, setDarkMode } from '../../redux/authReducer';
import { getProfile } from '../../redux/profileReducer';

const NavbarContainer = (props) => {
  
  return (
    <Navbar {...props}
    profile={props.profile}
    setToggleClass={props.setToggleClass}
    
    />
    )
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  login: state.auth.login,
  userId: state.auth.userId,
  authorizedUserId: state.auth.userId,
  photos: state.auth.photos,
  toggleClass: state.auth.toggleClass
});

export default connect(mapStateToProps, { signOut, setToggleClass, setDarkMode})(NavbarContainer)