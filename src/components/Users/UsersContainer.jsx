import React from 'react';
import { connect } from 'react-redux';
import { follow,  setCurrentPage,  unfollow, getUsers } from '../../redux/usersReducer';

import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {  usersAPI } from '../../api/api';

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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
   
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
})(UsersAPIComponent)
