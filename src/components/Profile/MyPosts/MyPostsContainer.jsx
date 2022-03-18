import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfile, getProfileStatus, addPostActionCreator} from "../../../redux/profileReducer";
import { withRouter } from "../WithRouter";
import MyPosts from "./MyPosts";


class MyPostsContainer extends React.Component {

  componentDidMount() { 
    let userId = this.props.params.userId
    if (!userId) {
      userId = this.authorizedUserId
    }
    this.props.getProfile(userId)
    this.props.getProfileStatus(userId)
   }
 

  render() {
   
        return (
      <div >
        <MyPosts  profile={this.props.profile} newPostText={this.props.newPostText} posts={this.props.posts} addPost={this.props.addPost}/>
     </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
  }
}

export default compose(
  connect(mapStateToProps,{getProfile, getProfileStatus, addPost: addPostActionCreator, }),
  withRouter,
)(MyPostsContainer)


