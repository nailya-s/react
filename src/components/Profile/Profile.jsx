import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';

const Profile = (props) => {
  return (
  <div className>
    <div>
      <ProfileInfo profile={props.profile}/>
    </div>
    <MyPostsContainer />
  </div>
  )
}

export default Profile;