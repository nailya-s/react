import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
  <div className>
    <div>
      <ProfileInfo/>
    </div>
    <MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText} />
  </div>
  )
}

export default Profile;