import React from 'react';
import { connect } from 'react-redux';
import { follow,  setCurrentPage,  unfollow, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthNavigate';
import { compose } from 'redux';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsersSelector } from '../../redux/usersSelectors';

class UsersAPIComponent extends React.Component {
    
  componentDidMount() {
    this.props.getUsers(this.props.pageNumber, this.props.pageSize)
  }

  onPageChanges = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize) 
    this.props.setCurrentPage(pageNumber);
  } 


  
  render() {
    return  <> 
    { this.props.isFetching ? <Preloader/> : null}
    <Users 
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanges={this.onPageChanges}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    />
  </>
    
  };
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
   
//   }
// }
const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
   
  }
}
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
  })
)
(UsersAPIComponent)

