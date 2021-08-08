import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  let profile = props.profile;
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.content}>
        <img src='https://img5.goodfon.com/wallpaper/nbig/5/4f/les-gory-tuman.jpg' />
      </div>
      <div>
        <img src={profile.photos.large} />
      </div>
      <div>
        <ProfileStatus status= {props.status} updateStatus={props.updateStatus}/>
      </div>
      <div>
        {profile.fullName}
      </div>
      <div>
        Looking for a job: {profile.lookingForAJob === true ? (
          <span>YES</span>
        ) : <span>NO</span>}
      </div>
      <div>
        Type of job: {profile.lookingForAJobDescription}
      </div>
      <div>Facebook: {profile.contacts.facebook}</div>
      <div> Github:{profile.contacts.github}</div>
      <div> VK: {profile.contacts.vk}</div>
      <div> main: {profile.contacts.mainLink}</div>

    </div>
  )
}


export default ProfileInfo;