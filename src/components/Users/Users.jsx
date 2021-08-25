import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../images/images/unnamed.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../../common/Pagination/Paginator';



const Users = ({users, currentPage, totalUsersCount, pageSize, onPageChanged, followingInProgress, unfollow, follow }) => {

    return <div>
        <Paginator currentPage={currentPage } totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
        {

            users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+ u.id }>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                            
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    unfollow(u.id);
                                        
                                    }} > unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => { 
                                    follow(u.id);
                                        
                                }} > follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </div>
            )
        }
    </div>
}





export default Users;