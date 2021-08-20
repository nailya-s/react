import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = (props) => {

  let profile = props.profile;
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src={profile.photos.large} />
      </div>
      <div>
        <ProfileStatusHook status= {props.status} updateStatus={props.updateStatus}/>
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