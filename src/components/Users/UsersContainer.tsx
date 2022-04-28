import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow,  actions,  unfollow, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthNavigate';
import { compose } from 'redux';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUserSuperSelector } from '../../redux/usersSelectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';

type PropsMSTPType = {
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  currentPage: number
  users: Array<UserType>
}
type PropsMDTPType = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  getUsers: (currentPage: number,pageSize: number ) => void
  setCurrentPage: (currentPage: number) => void
}
type PropsOwnType = {
 }
type PropsType = PropsMSTPType & PropsMDTPType & PropsOwnType

const UsersAPIComponent: React.FC<PropsType> = (props: PropsType) => {
  useEffect(() =>  {
    const {currentPage, pageSize}  = props
    props.getUsers(currentPage, pageSize)
  }, []
  )
  const onPageChanges = (pageNumber: number) => {
    props.getUsers(pageNumber, props.pageSize) 
    props.setCurrentPage(pageNumber);
  } 

   return  <> 
            <Users 
              totalUsersCount={props.totalUsersCount}
              pageSize={props.pageSize}
              onPageChanges={onPageChanges}
              users={props.users}
              follow={props.follow}
              unfollow={props.unfollow}
              isFetching = {props.isFetching }
              getUsers={getUsers}
            />
          </>
    
  };



const mapStateToProps = (state: AppStateType): PropsMSTPType => {
  return {
    users: getUserSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),    
  }
}
export default compose(
  withAuthRedirect,
  // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<PropsMSTPType, PropsMDTPType, PropsOwnType,  AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage: actions.setCurrentPage,
    getUsers
  })
)
(UsersAPIComponent)

