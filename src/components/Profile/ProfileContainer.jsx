import React from "react";
import { withRouter } from "./WithRouter";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile, getProfile} from '../../redux/profileReducer'
import { usersAPI } from "../../api/api";


class ProfileContainer extends React.Component {

  componentDidMount() { 
   let userId = this.props.params.userId
   if (!userId) {
     userId = 2
   }
   this.props.getProfile(userId)
  }
  
  render() {
    
    return (
      <div >
        <Profile {...this.props} profile={this.props.profile}/>
     </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithURLComtainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithURLComtainerComponent);