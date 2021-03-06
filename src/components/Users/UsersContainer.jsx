import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow,  unfollow, setPage, toggleFollowingInProgress, requestUsers} from '../../redux/usersReducer';
import Preloader from '../../common/Preloader/Preloader';
import {compose} from 'redux'
import { withAuthRedirect } from './../../Hoc/AuthRedirect';
import {getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
            
        </>
    };
};


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state) ,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setPage, toggleFollowingInProgress,
        requestUsers: requestUsers})
        
)(UsersContainer);