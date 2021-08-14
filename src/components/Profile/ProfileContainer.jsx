import React from 'react';
import Profile from './Profile';
import {setUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/AuthRedirect';
import {compose} from 'redux'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.authorizedUserId;
    };
    this.props.setUserProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }

  render() {
    
    return (
      <Profile {...this.props} profile= {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateUserStatusThunkCreator}/>
    )
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId
});

export default compose(
  connect(mapStateToProps, { setUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
