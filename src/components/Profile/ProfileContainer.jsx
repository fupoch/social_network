import React, { useEffect } from "react";
import { withRouter } from "./WithRouter";
import Profile from "./Profile";
import { connect } from "react-redux";
import { addPostActionCreator, getProfile, getProfileStatus, putProfileStatus, savePhoto} from '../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";



const ProfileContainer = (props) => {


 
  useEffect(() => {
    let userId = props.params.userId
    if (!userId) {
      userId = props.authorizedUserId
    }
    props.getProfile(userId)
    props.getProfileStatus(userId)
  }, [props.params.userId])

  useEffect(() => {
    if (!props.isAuth) {
      props.history.push("/login")
    } 
  }, [props.isAuth])

  // componentDidMount() { 
  //  let userId = props.params.userId
  //  if (!userId) {
  //    userId = authorizedUserId
  //  }
  //  props.getProfile(userId)
  //  props.getProfileStatus(userId)
  // }

  // componentDidUpdate(prevProps) {
  //   if (!props.isAuth) {
  //     props.history.push("/login")
  //   } 
  // }
  
  
        return (
      <div >
        <Profile
      {...props} 
      profile={props.profile} 
      status={props.profileStatus} 
      putProfileStatus={props.putProfileStatus} 
      newPostText={props.newPostText} 
      profilePage={props.profilePage} 
      addPost={props.addPost}
      isOwner={props.params.userId == props.authorizedUserId ?  true : false}
      savePhoto={props.savePhoto}
      />
     </div>
    )
  }



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profileStatus: state.profilePage.profileStatus,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  newPostText: state.profilePage.newPostText,
  profilePage: state.profilePage,
})

export default compose(
  connect(mapStateToProps, {getProfile, getProfileStatus, putProfileStatus, addPost: addPostActionCreator, savePhoto}),
  withRouter,
  withAuthRedirect
)
(ProfileContainer)
 