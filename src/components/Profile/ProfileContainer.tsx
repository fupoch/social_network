import React, { useEffect } from "react";
import { withRouter } from "./WithRouter";
import Profile from "./Profile";
import { connect } from "react-redux";
import {  getProfile, getProfileStatus, putProfileStatus, savePhoto, editProfileData, actions} from '../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import { PhotosType, PostsType, ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type PropsMSTPType = {
  profile: ProfileType,
  profileStatus: string
  isAuth: boolean
  authorizedUserId: number
  newPostBody: string
  posts: Array<PostsType>
}
type PropsMDTPType = {
  getProfile: (userId: number) => void
  getProfileStatus: (userId: number) => void
  putProfileStatus: (status: string) => void
  addPost: (newPostBody: string)  => void
  savePhoto: (file: PhotosType) => void
  editProfileData: (profile: ProfileType) => void
}
type PropsOwnType = {
  params: {userId: number}
}

type PropsType = PropsMSTPType & PropsMDTPType & PropsOwnType

const ProfileContainer: React.FC<PropsType> = (props: PropsType) => {
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
      // @ts-ignore
      props.history.push("/login")
    } 
  }, [props.isAuth])

    return (
      <div >
        <Profile
          {...props} 
          profile={props.profile} 
          status={props.profileStatus} 
          putProfileStatus={props.putProfileStatus} 
          newPostText={props.newPostBody} 
          posts={props.posts} 
          addPost={props.addPost}
          isOwner={+props.params.userId === props.authorizedUserId ?  true : false}
          savePhoto={props.savePhoto}
          editProfileData={props.editProfileData}
          />
     </div>
    )
  }



let mapStateToProps = (state: AppStateType): PropsMSTPType => ({
  profile: state.profilePage.profile,
  profileStatus: state.profilePage.profileStatus,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  newPostBody: state.profilePage.newPostBody,
  posts: state.profilePage.posts,
})

export default compose(
  connect<PropsMSTPType, PropsMDTPType, PropsOwnType,  AppStateType>(mapStateToProps, { 
    getProfile, 
    getProfileStatus,
    putProfileStatus, 
    addPost: actions.addPostActionCreator, 
    savePhoto, 
    editProfileData,
  }),
  withRouter,
  withAuthRedirect
)
(ProfileContainer)
 