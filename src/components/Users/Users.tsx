import React from 'react'
import Paginator from './Paginator'
import User from './User'
import { UserType } from '../../types/types'
import Preloader from '../common/preloader/Preloader'
import { makeStyles } from '@mui/styles'
import UsersFilter from './UsersFilter'
import { UseUser } from '../../hooks/useUsersFilter'


type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanges: (PageNumber:number) => void
  users: Array<UserType>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  isFetching: boolean
  getUsers: (currentPage: number, pageSize: number, term: string) => void
}
const useStyles = makeStyles({
  wrapper: {
    padding: '10px',
  },
  wrapper__paginator: {
    display: 'flex',
    justifyContent: 'center'
  },
  wrapper__users: {
    display: 'flex',
    justifyContent: 'center'
  }
})
let Users: React.FC<PropsType> = (props: PropsType) => {
  const [filter, setFilter] = React.useState({sort: '', query: ''})
  const sortedAndSearchedPosts = UseUser(props.users, filter.sort, filter.query, props.getUsers);

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }
  const classes = useStyles(props);
  return <div className={classes.wrapper}>
            <div className={classes.wrapper__paginator}>
              <Paginator 
                totalUsersCount={props.totalUsersCount} 
                onPageChanges={props.onPageChanges} 
                pageSize={props.pageSize}
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <UsersFilter  filter={filter} setFilter={setFilter}/>
            </div>
            
            {
            props.isFetching ? 
              <Preloader/>
              :
              sortedAndSearchedPosts.map( u => 
                <div className={classes.wrapper__users}>
                  <User 
                    key={u.id}
                    user={u}
                    unfollow={props.unfollow}
                    follow={props.follow}
                  /> 
                </div>
                
              )
            }
          </div>
}

export default Users