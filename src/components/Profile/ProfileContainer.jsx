import React from "react";
import { withRouter } from "./WithRouter";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile} from '../../redux/profileReducer'
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";



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
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect
)
(ProfileContainer)
 