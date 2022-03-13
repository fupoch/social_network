import React from "react";
import { withRouter } from "./WithRouter";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getProfileStatus, putProfileStatus} from '../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";



class ProfileContainer extends React.Component {

  componentDidMount() { 
   let userId = this.props.params.userId
   if (!userId) {
     userId = this.authorizedUserId
   }
   this.props.getProfile(userId)
   this.props.getProfileStatus(userId)
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isAuth) {
      this.props.history.push("/login")
    } 
  }
  
  render() {
        return (
      <div >
        <Profile {...this.props} profile={this.props.profile} status={this.props.profileStatus} putProfileStatus={this.props.putProfileStatus}/>
     </div>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profileStatus: state.profilePage.profileStatus,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  
})

export default compose(
  connect(mapStateToProps, {getProfile, getProfileStatus, putProfileStatus,}),
  withRouter,
  withAuthRedirect
)
(ProfileContainer)
 