import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';

const Profile = (props) => {
  return (
  <div>
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus= {props.updateStatus}/>
    </div>
    <MyPostsContainer />
  </div>
  )
}

export default Profile;